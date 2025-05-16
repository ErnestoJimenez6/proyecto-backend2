import{dirname}from'path'
import{fileURLToPath}from'url'
import bcrypt from'bcryptjs'

export const __dirname=dirname(fileURLToPath(import.meta.url))

export const createHash=password=>bcrypt.hashSync(password,bcrypt.genSaltSync(10))

export const isValidPassword=(password,userOrHash)=>{
    const hash=typeof userOrHash==='string'?userOrHash:userOrHash.password
    return bcrypt.compareSync(password,hash)
}

export const createResponse=(res,statusCode,data,message=null)=>{
    const response={success:statusCode<400}
    if(message)response.message=message
    if(data)response.data=data
    
    return res.status(statusCode).json(response)
}

export const generateRandomCode=(length=6)=>{
    return Math.random().toString(36).substring(2,2+length).toUpperCase()
}