import{userService}from'../services/user-service.js'

class UserController{
    constructor(service){
        this.service=service
    }

    register=async(req,res,next)=>{
        try{
            await this.service.register(req.body)
            return res.redirect('/')
        }catch(error){
            next(error)
        }
    }

    create=async(req,res,next)=>{
        try{
            const response=await this.service.create(req.body)
            if(!response)return res.redirect('/errorRegistro')
            return res.redirect('/')
        }catch(error){
            next(error)
        }
    }

/*
    login=async(req,res)=>{
        const{email,password}=req.body
        const user=await this.service.login(email,password)
        if(user){
            req.session.email=email
            req.session.password=password
            req.session.role=user.role
            return res.redirect('/perfil')
        }
        return res.redirect('/errorlogin')
    }
*/

    login=async(req,res,next)=>{
        try{
            const{email,password}=req.body
            const user=await this.service.login(email,password)
            req.session.first_name=user.first_name
            return res.redirect('/profile')
        }catch(error){
            next(error)
        }
    }

    getAll=async(req,res,next)=>{
        try{
            const response=await this.service.getAll()
            res.status(200).json(response)
        }catch(error){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const response=await this.service.getById(id)
            res.status(200).json(response)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const response=await this.service.update(id,req.body)
            res.status(200).json(response)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const response=await this.service.delete(id)
            res.status(200).json(response)
        }catch(error){
            next(error)
        }
    }
}

export const userController=new UserController(userService)

/*
const users=[
    {
        username:'Guillermo',
        password:'1234',
        admin:true,
    },
    {
        username:'Juan',
        password:'12345',
        admin:false,
    }
]

export const login=(req,res)=>{
    const{username,password}=req.body
    const index=users.findIndex((aUser)=>aUser.username===username&&aUser.password===password)
    console.log(index)
    if(index<0)
        res.status(401).json({msg:'no estas autorizado'})
    else{
        const user=users[index]
        req.session.info={
            loggedIn:true,
            contador:1,
            username:user.username,
            admin:user.admin,
        }
        res.json({msg:'Bienvenido!!'})
    }
}

export const visit=(req,res)=>{
    req.session.info.contador++
    res.json({
        msg:`${req.session.info.username} ha visitado el sitio ${req.session.info.contador} veces`
    })
}

export const logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(!err)res.send('Logout ok!')
        else res.send({status:'Logout ERROR',body:err})
    })
}

export const infoSession=(req,res)=>{
    res.send({
        session:req.session,
        sessionId:req.sessionID,
        cookies:req.cookies,
    })
}
*/