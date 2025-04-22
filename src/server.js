import express from'express'
import'dotenv/config'
import path from'path'
import session from'express-session'
import MongoStore from'connect-mongo'
import cookieParser from'cookie-parser'
import handlebars from'express-handlebars'
import passport from'passport'

import{initMongoDB}from'./db/database.js'
import{__dirname}from'./utils/utils.js'
import{errorHandler}from'./middlewares/error-handler.js'
import{isAdmin,validateLogin}from'./middlewares/index.js'

import apiRouter from'./routes/index.js'
import userCustomRouter from'./routes/user.routes.js'
import loginRouter from'./routes/login.router.js'
import productRouter from'./routes/product-router.js'
import viewsRouter from'./routes/views.router.js'

import'./config/passport/local-strategy.js'

const app=express()
const PORT=8080
const ttlSeconds=180

const sessionOptions={
    store:MongoStore.create({
        mongoUrl:process.env.MONGO_URL,
        ttl:ttlSeconds,
    }),
    secret:process.env.SECRET_KEY,  
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:180000,
    }
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.SECRET_KEY))
app.use(session(StoreOptions))
app.use(passport.initialize())
app.use(passport.session())

app.all('/*',(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] ${req.method} - ${req.originalUrl}`)
    next()
})

app.use(express.static(`${__dirname}/public`))

app.use('/api',apiRouter)
app.use('/',viewsRouter)
app.use('/users',userCustomRouter.getRouter())
app.use('/login',loginRouter)
app.use('/products',productRouter)

app.engine('handlebars',handlebars.engine())
app.set('views',path.join(__dirname,'../views'))
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
    const{idioma}=req.cookies
    idioma==='ingles'?res.send('hello!'):res.send('hola!')
})

app.get('/get-signed-cookie',(req,res)=>{
    const{idioma}=req.signedCookies
    idioma==='ingles'?res.send('hello!'):res.send('hola!')
})

app.get('/clear-cookie',(req,res)=>{
    Object.keys(req.cookies).forEach((key)=>res.clearCookie(key))
    res.json({message:'cookies cleared'})
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

app.use(errorHandler)

initMongoDB()
    .then(()=>console.log('Connected to MongoDB'))
    .catch((error)=>console.log(error))

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})