import{Router}from'express'
import passport from'passport'
import{userController}from'../controllers/user.controllers.js'
import{isAuth}from'../middlewares/is-auth.js'
import{checkRole}from'../middlewares/check-role.js'

const router=Router()

router.param('email',(req,res,next,email)=>{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if(emailRegex.test(email))return next()
    return res.status(400).send('email invalido')
})

router.get('/email/:email',(req,res)=>{
    res.status(200).send('email valido')
})

router.all('/admin/*',passport.authenticate('jwt-cookies'),checkRole('admin'),(req,res,next)=>{
    next()
})

router.get('/admin/dashboard',(req,res)=>{
    res.send('panel admin')
})

router.get('*',(req,res)=>{
    res.status(404).json({message:'Ruta inexistente'})
})

export default router