import{Router}from'express'
import passport from'passport'
import{userController}from'../controllers/user.controllers.js'
import{isAuth}from'../middlewares/is-auth.js'
import{checkRole}from'../middlewares/check-role.js'

const router=Router()

router.param('userEmail',(req,res,next)=>{
    const email=req.params.email
    const emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if(!emailRegex.test(email)){
        return res.status(400).send('Email inválido')
    }
    res.status(200).json({email})
})

router.get('/admin/dashboard', 
    passport.authenticate('jwt-cookies'), 
    checkRole('admin'),
    (req,res)=>{
        res.send('Panel admin')
    }
)

export default router