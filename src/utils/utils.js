import{dirname}from'path'
import{fileURLToPath}from'url'
import bcryptjs from'bcryptjs'

export const __dirname=dirname(fileURLToPath(import.meta.url))

export const createHash=password=>
    bcryptjs.hashSync(password,bcryptjs.genSaltSync(10))

export const isValidPassword=(password,user)=>
    bcryptjs.compareSync(password,user.password)