import{Router}from'express'

const router=Router()

router.get('/:id',(req,res)=>{
    res.render('jwt')
})

router.get('/register',(req,res)=>{
    res.render('jwt')
})

router.get('/profile',(req,res)=>{
    const user=req.session
    res.render('profile',{user})
    console.log(req.session.email)
})

export default router