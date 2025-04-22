export const errorHandler=(error,req,res,next)=>{
    console.log(error)
    const status=error.statusCode||500
    res.status(status).json({message:error.message})
}