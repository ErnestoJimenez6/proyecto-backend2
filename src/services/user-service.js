import{userDao}from'../daos/mongodb/user-dao.js'
import CustomError from'../utils/custom-error.js'
import{createHash,isValidPassword}from'../utils/user-utils.js'
import jwt from'jsonwebtoken'
import'dotenv/config'

class UserService{
    constructor(dao){
        this.dao=dao
    }

    register=async(body)=>{
        try{
            const{email,password}=body
            const existUser=await this.dao.getByEmail(email)
            if(existUser)throw new CustomError('El usuario ya existe',400)
            const response=await this.dao.create({
                ...body,
                password:createHash(password),
            })
            if(!response)throw new CustomError('Error al registrar usuario',400)
            return response
        }catch(error){
            throw error
        }
    }

    create=async(body)=>{
        try{
            const response=await this.dao.create(body)
            if(!response)throw new CustomError('Error creating user',400)
                return response
        }catch(error){
            throw error
        }
    }

    login=async(email,password)=>{
        try{
            const userExist=await this.dao.getByEmail(email)
            if(!userExist)throw new CustomError('Credenciales incorrectas',400)
            const passValid=isValidPassword(password,userExist.password)
            if(!passValid)throw new CustomError('Credenciales incorrectas',400)
            return userExist
        }catch(error){
            throw error
        }
    }

    generateToken=(user)=>{
        const payload={
            first_name:user.first_name,
            last_name:user.last_name,
            email:user.email,
            role:user.role,
        }
        return jwt.sign(payload,process.env.JWT_SECRET, {
            expiresIn:'20m',
        })
    }

    getAll=async()=>{
        try{
            return await this.dao.getAll()
        }catch(error){
            throw new Error(error)
        }
    }

    getById=async(id)=>{
        try{
            const response=await this.dao.getById(id)
            if(!response)throw new CustomError('User not found',404)
                return response
        }catch(error){
            throw error
        }
    }

    getByEmail=async(email)=>{
        try{
            return await this.dao.getByEmail(email)
        }catch(error){
            throw error
        }
    }

    update=async(id,body)=>{
        try{
            const response=await this.dao.update(id,body)
            if(!response)throw new CustomError('User not found',404)
                return response
        }catch(error){
            throw error
        }
    }

    delete=async(id)=>{
        try{
            const response=await this.dao.delete(id)
            if(!response)throw new CustomError('User not found',404)
                return response
        }catch(error){
            throw error
        }
    }
}

export const userService=new UserService(userDao)