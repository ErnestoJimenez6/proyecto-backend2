import {userDaoMongo} from '../daos/mongodb/user-dao.js'
import {cartService} from './cart-service.js'
import {createHash, isValidPassword} from '../utils/user-utils.js'
import CustomError from '../utils/custom-error.js'
import UserDTO from '../dto/user-dto.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default class UserService{
    constructor(dao){
        this.dao=dao
    }

    generateToken=(user,time='20m')=>{
        const payload={
            id:user._id,
            first_name:user.first_name,
            last_name:user.last_name,
            email:user.email,
            role:user.role,
        }
        return jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:time})
    }

    getByEmail=async(email)=>{
        try{
            const user=await this.dao.getByEmail(email)
            if(!user)throw new CustomError('User not found',404)
            return user
        }catch(error){
            throw this.handleError(error)
        }
    }

    register=async(user)=>{
        try{
            const{email,password}=user
            const existUser=await this.dao.getByEmail(email)
            if(existUser)throw new CustomError('User already exists',400)
            const cartUser=await cartDaoMongo.create()
            if(email===process.env.EMAIL_ADMIN&&password===process.env.PASS_ADMIN){
                return await this.dao.create({
                    ...user,
                    password:createHash(password),
                    role:'admin',
                    cart:cartUser._id,
                })
            }else{
                return await this.dao.create({
                    ...user,
                    password:createHash(password),
                    cart:cartUser._id,
                })
            }
        }catch(error){
            throw error
        }
    }

    login=async(user)=>{
        try{
            const{email,password}=user
            const userExist=await this.getByEmail(email)
            if(!userExist)throw new CustomError('credenciales incorrectas',401)
            const passValid=isValidPassword(password,userExist.password)
            if(!passValid)throw new CustomError('credenciales incorrectas',401)
            return this.generateToken(userExist)
        }catch(error){
            throw error
        }
    }

    getById=async(id)=>{
        try{
            const user=await this.dao.getUserById(id)
            return new UserDTO(user)
        }catch(error){
            throw this.handleError(error)
        }
    }
}

export const userService=new UserService(userDaoMongo)