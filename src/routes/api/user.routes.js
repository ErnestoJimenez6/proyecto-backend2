import{Router}from'../custom-router.js'
import passport from'passport'
import{userController}from'../../controllers/user.controllers.js'
import{isAuth}from'../../middlewares/is-auth.js'
import{checkRole}from'../../middlewares/auth/check-role.js'

export default class UserCustomRouter extends Router{
    init(){
        this.router.param('email',(req,res,next,email)=>{
            const emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
            if(!emailRegex.test(email)){
                return res.status(400).json({message:'Email inválido'})
            }
            req.validatedEmail=email
            next()
        })

        this.get('/',['PUBLIC'],(req,res)=>res.send('Ruta pública'))
        this.post('/register',['PUBLIC'],userController.register)
        this.post('/login',['PUBLIC'],userController.login)

        this.get('/:email',['USER','ADMIN'],(req,res)=>{
            userController.getByEmail(req.validatedEmail)
                .then(user=>res.status(200).json(user))
                .catch(error=>res.status(404).json({message:error.message}))
        })

        this.get(
            '/private-cookies', 
            ['USER','ADMIN'],
            passport.authenticate('jwt-cookies'),
            (req,res)=>res.send(req.user)
        )

        this.get(
            '/private-cookies-admin', 
            ['ADMIN'], 
            passport.authenticate('jwt-cookies'),
            isAuth,
            checkRole('admin'),
            (req,res)=>res.send(req.user)
        )

        this.get(
            '/admin/dashboard', 
            ['ADMIN'],
            passport.authenticate('jwt-cookies'), 
            isAauth,
            checkRole('admin'),
            (req,res)=>res.status(200).jsoon({message:'Panel admin'})
        )

        this.get('*',['PUBLIC'],(req,res)=>{
        res.status(404).json({message:'Ruta inexistente'})
        })
    }
}

export const userCustomRouter=new UserCustomRouter()