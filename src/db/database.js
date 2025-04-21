import{connect}from'mongoose'
import'dotenv/config'

export const initMongoDB=async()=>{
    try{
        await connect(process.env.MONGO_URL)
        console.log('MongoDB conectado')
    }catch(error){
        throw new Error(`ERROR=>${error}`)
    }
}