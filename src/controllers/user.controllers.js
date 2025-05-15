import {userService} from '../services/user-service.js'
import {createResponse} from '../utils.js'

export default class UserController{
    constructor(service){
        this.service=service
    }

    register=async(req,res,next)=>{
        try{
            const user=await this.service.register(req.body)
            createResponse(res,201,user)
        }catch(error){
            next(error)
        }
    }

    create=async(req,res,next)=>{
        try{
            const user=await this.service.create(req.body)
            if(!user){
                return res.redirect('/errorRegistro')
            }
            return res.redirect('/')
        }catch(error){
            next(error)
        }
    }

    login=async(req,res,next)=>{
        try{
            const{email,password}=req.body
            const user=await this.service.login(email,password)
            const token=this.service.generateToken(user)
            res.cookie('token',token,{httpOnly:true})
            createResponse(res,200,{user,token})
        }catch(error){
            next(error)
        }
    }

    profile=async(req,res,next)=>{
        try{
            const{id}=req.user
            const user=await this.service.getById(id)
            createResponse(res,200,user)
        }catch(error){
            next(error)
        }
    }

    getAll=async(req,res,next)=>{
        try{
            const users=await this.service.getAll()
            createResponse(res,200,users)
        }catch(error){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const user=await this.service.getById(id)
            createResponse(res,200,user)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const updatedUser=await this.service.update(id,req.body)
            createResponse(res,200,updatedUser)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const result=await this.service.delete(id)
            createResponse(res,200,{ 
                message:'User deleted successfully', 
                result 
            })
        }catch(error){
            next(error)
        }
    }
}

export const userController=new UserController(userService)