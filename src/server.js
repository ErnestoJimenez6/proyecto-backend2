import express from'express'
import{initMongoDB}from'./daos/mongodb/connection.js'
import session from'express-session'
import sessionFileStore from'session-file-store'
import mainRouter from'./routes/user.routes.js'
import{errorHandler}from'./middlewares/error-handler.js'
import productRouter from'./routes/product-router.js'
import cookieParser from'cookie-parser'
import handlebars from'express-handlebars'
import{__dirname}from'./utils/utils.js'
import'dotenv/config'
import loginRouter from'./routes/login.router.js'
import viewsRouter from'./routes/views.router.js'
import{isAdmin,validateLogin}from'./middlewares/index.js'
import'dotenv/config'

const FileStore=sessionFileStore(session)

const ttlSeconds=180

const fileStoreOptions={
    store:new FileStore({ 
        path:'./sessions',      
        ttl:ttlSeconds,           
        reapInterval:60
    }),
    secret:'secretString',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:ttlSeconds*1000,  
    }                            
}

const app=express()

app.use(express.json())
app.use(cookieParser(process.env.SECRET_KEY))
app.use(express.urlencoded({extended:true}))

const sessionConfig={
    secret:process.env.SECRET_KEY,
    cookie:{maxAge:30000},
    saveUninitialized:true,
    resave:false,
}

app.use(session(sessionConfig))

const users=[
    {
        username:'Juan',
        password:'1234',
        admin:false
    },
    {
        username:'Guillermo',
        password:'12345',
        admin:true
    }
]

app.use('/login',loginRouter)
app.use('/',viewsRouter)

app.use('/products',productRouter)

app.use(errorHandler)

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/../views')
app.set('view engine','handlebars')

app.get('/set-cookie',(req,res)=>{
    res.cookie('idioma','ingles').json({message:'ok'})
})

app.get('/set-cookie2',(req,res)=>{
    res.cookie('modo','oscuro').json({message:'ok'})
})

app.get('/set-signed-cookie',(req,res)=>{
    res
        .cookie('idioma','ingles',{signed:true,maxAge:10000})
        .json({message:'ok'})
})

app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies)
    const{idioma}=req.cookies
    idioma==='ingles'?res.send('hello!'):res.send('hola!')
})

app.get('/get-signed-cookie',(req,res)=>{
    const{idioma}=req.signedCookies
    idioma==='ingles'?res.send('hello!'):res.send('hola!')
})

app.get('/clear-cookie',(req,res)=>{
    res.clearCookie('idioma').json({message:'clear cookie ok'})
})

app.get('/clear-cookies',(req,res)=>{
    const cookies=req.cookies

    const keys=Object.keys(cookies)

    keys.forEach((key)=>res.clearCookie(key))

    res.json({message:'clear cookies ok'})
})

app.post('/login',(req,res)=>{
    const{username,password}=req.body
    const index=users.findIndex((user)=>user.username===username&&user.password===password)
    if(index<0)return res.status(400).json({message:'credenciales incorrectas'})
    const user=users[index]
    req.session.info={
        loggedIn:true,
        count:1,
        admin:user.admin
    }
    res.json({ message:'Bienvenido/a'})
})

app.get('/secret-endpoint',validateLogin,(req,res)=>{
    req.session.info.count++
    res.json({
        message:'info para usuarios logueados',
        session:req.session
    })
})

app.get('/admin-secret-endpoint',validateLogin,isAdmin,(req,res)=>{
    req.session.info.count++
    res.json({
        message:'info para usuarios admin',
        session:req.session
    })
})

app.post('/logout',(req,res)=>{
    req.session.destroy()
    res.json({message:'logout ok'})
})

initMongoDB()
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=>console.log(error))

const PORT=8080
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})