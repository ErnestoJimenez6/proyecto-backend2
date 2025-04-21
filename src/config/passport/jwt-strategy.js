import{Strategy as JwtStrategy,ExtractJwt}from'passport-jwt'
import{userService}from'../../services/user-service.js'

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET
}

export const jwtStrategy=new JwtStrategy(options,async(payload,done)=>{
    try{
        const user=await userService.getByEmail(payload.email)
        if(!user)return done(null,false)
        return done(null,user)
    }catch(error){
        return done(error,false)
    }
})