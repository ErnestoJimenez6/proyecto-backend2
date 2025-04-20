import mongoose from'mongoose'

const connectionString='mongodb+srv://zynhop6:N1rv4n4z0$@cluster0.yvuam.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'

export const initMongoDB=async()=>{
    try{
        await mongoose.connect(connectionString)
    }catch(error){
        throw new Error(`ERROR=>${error}`)
    }
}