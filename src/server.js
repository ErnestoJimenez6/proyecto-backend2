import express from 'express'
import {program} from 'commander'
import path from 'path'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
import passport from 'passport'

import {initMongoDB} from './db/database.js'
import {__dirname} from './utils/utils.js'
import {errorHandler} from './middlewares/error-handler.js'
import {isAdmin,validateLogin} from'./middlewares/index.js'
import config from './config/config.js'

import apiRouter from './routes/index.js'
import emailRouter from './routes/email-router.js'
import userCustomRouter from './routes/api/user.routes.js'
import loginRouter from './routes/login.router.js'
import productRouter from './routes/api/product-router.js'
import viewsRouter from './routes/views.router.js'

import './config/passport/jwt-strategy.js'
import './config/passport/local-strategy.js'

//commander
program
    .option('-p, --port <port>','port server',config.PORT)
    .option('-e, --env <environment>','environment server',config.ENV)
    .parse(process.argv)

const options=program.opts()
const PORT=config.PORT
const ENV=options.env

const app=express()
const ttlSeconds=180

//diagnostico
console.log('=== Configuración del Servidor ===')
console.log('🖥️CWD: ',process.cwd())
console.log('🆔PID: ',process.pid)
console.log('⚙️VERSION: ',process.version)
console.log('💻PLATFORM: ',process.platform)
console.log('🧠MEMORY: ', `${JSON.stringify(process.memoryUsage())}`)
console.log(process.argv[2])
console.log('==================================')

//session
const sessionOptions={
    store:MongoStore.create({
        mongoUrl:config.MONGO_URL,
        ttl:ttlSeconds,
    }),
    secret:process.env.SECRET_KEY,  
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:180000,
        secure:ENV==='prd',
        httpOnly:true
    }
}

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.SECRET_KEY))
app.use(session(sessionOptions))
app.use(passport.initialize())
app.use(passport.session())

//solicitudes
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
    next()
})

app.use(express.static(path.join(__dirname,'public')))

//handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',path.join(__dirname,'../views'))
app.set('view engine','handlebars')

//rutas
app.use('/api',apiRouter,emailRouter)
app.use('/users',userCustomRouter)
app.use('/products',productRouter)
app.use('/login',loginRouter)
app.use('/',viewsRouter)

//cookies
app.get('/set-signed-cookie',(req,res)=>{
    res
        .cookie('idioma','ingles',{signed:true,maxAge:10000})
        .json({message:'ok'})
})

app.get('/get-signed-cookie',(req,res)=>{
    const{idioma}=req.signedCookies
    idioma==='ingles'?res.send('hello!'):res.send('hola!')
})

//endpoints
app.get('/secret-endpoint',validateLogin,(req,res)=>{
    req.session.info=req.session.info||{count:0}
    req.session.info.count++
    res.json({
        message:'info para usuarios logueados',
        session:req.session.info
    })
})

app.get('/admin-secret-endpoint',validateLogin,isAdmin,(req,res)=>{
    req.session.info=req.session.info||{count:0}
    req.session.info.count++
    res.json({
        message:'info para usuarios admin',
        session:req.session.info
    })
})

//manejo de errores
app.use(errorHandler)

//servidor
initMongoDB()
    .then(()=>{
        console.log('✅Connected to MongoDB')
        app.listen(PORT,()=>{
            console.log(`🚀Server listening on port ${PORT} in ${config.ENV} mode`)
        })
    })
    .catch((error)=>{
        console.error('❌Error al conectar a MongoDB:',error)
        process.exit(1)
    })