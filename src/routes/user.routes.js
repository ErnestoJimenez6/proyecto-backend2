import{Router}from'express'
import passport from'passport'
import{userController}from'../controllers/user.controllers.js'
import{isAuth}from'../middlewares/is-auth.js'
import{checkAuthTokenHeaders,checkAuthTokenCookies}from'../middlewares/check-auth.js'

const router=Router()

router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/register',(req,res)=>{
    res.redirect('/register')
})

router.post(
    '/register',
    passport.authenticate('register'),
    userController.register
)

router.post(
    '/login',
    passport.authenticate('login'),
    userController.login
)

router.get(
    '/current',
    passport.authenticate('jwt',{session:false}),
    (req,res)=>{
        res.json({
            first_name:req.user.first_name,
            last_name:req.user.last_name,
            email:req.user.email,
            age:req.user.age,
            role:req.user.role
        })
    }
)

router.get('/private',isAuth,(req,res)=>res.send('ruta privada'))

router.get('/private-headers',checkAuthTokenHeaders,(req,res)=>res.send(req.user))
router.get('/private-cookies',checkAuthTokenCookies,(req,res)=>res.send(req.user))

export default router