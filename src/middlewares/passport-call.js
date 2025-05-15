import passport from 'passport'

export const passportCall=(strategy, options={})=>{
    return async(req,res,next)=>{
        passport.authenticate(strategy,options,(error,user,info)=>{
            try{
                if(error){
                    console.error('Passport authentication error:',error)
                    return next(error)
                }

                if(!user){
                    const errorMessage=info?.message||info?.toString()||'Unauthorized'
                    console.warn('Passport authentication failed:',errorMessage)
                    return res.status(401).json({ 
                        status:'error', 
                        error:errorMessage,
                        details:info?.details||null
                    })
                }

                req.user=user
                next()
            }catch(err){
                console.error('Error in passportCall middleware:',err)
                next(err)
            }
        })(req,res,next)
    }
}