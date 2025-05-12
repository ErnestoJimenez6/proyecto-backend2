import {connect} from'mongoose'
import config from '../config/config.js'

export const initMongoDB=async()=>{
    try{
        console.log(`🔄 Conectando a MongoDB (${options.ENV.toUpperCase()})...`)
        await connect(config.MONGO_URL,{
            serverSelectionTimeoutMS:5000,
            socketTimeoutMS:45000,
        })
        console.log('✅MongoDB conectado exitosamente')
    }catch(error){
        console.error('❌Error de conexión a MongoDB:',error.message)
        throw new Error(`Error al conectar a MongoDB: ${error.message}`)
    }
}