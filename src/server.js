import express from'express'
import{initMongoDB}from'./db/database.js'
import session from'express-session'
import MongoStore from'connect-mongo'
import{errorHandler}from'./middlewares/error-handler.js'
import cookieParser from'cookie-parser'
import handlebars from'express-handlebars'
import path from'path'
import{__dirname}from'./utils/utils.js'
import loginRouter from'./routes/login.router.js'
import productRouter from'./routes/product-router.js'
import viewsRouter from'./routes/views.router.js'
import userRouter from'./routes/user.routes.js'
import mainRouter from'./routes/user.routes.js'
import{isAdmin,validateLogin}from'./middlewares/index.js'
import'dotenv/config'

const ttlSeconds=180

const StoreOptions={
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL,
        ttl:ttlSeconds,
    }),
    secret:process.env.SECRET_KEY,  
    resave:false,
    saveUninitialized:false,
}

const app=express()

app.use(express.json())
app.use(cookieParser(process.env.SECRET_KEY))
app.use(express.urlencoded({extended:true}))
app.use(session(StoreOptions))

app.use('/api',mainRouter)

app.use('/login',loginRouter)
app.use('/',viewsRouter)
app.use('/users',userRouter)
app.use('/products',productRouter)
app.use(errorHandler)

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/../views')
app.set('views',path.join(`${process.cwd()}/src/views`))
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

initMongoDB()
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=>console.log(error))

const PORT=8080
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})