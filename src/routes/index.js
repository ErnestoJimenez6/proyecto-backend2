import {Router} from'express'
import productsRouter from'./api/product-router.js'
import usersRouter from'./api/user.routes.js'
import cartsRouter from'./carts.router.js'
import ticketRouter from './ticket-router.js'

export default class MainRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init() {
        this.router.use('/products',productsRouter)
        this.router.use('/users',usersRouter)
        this.router.use('/carts',cartsRouter)
        this.router.use('/ticket',ticketRouter)
    }

    getRouter(){
        return this.router
    }
}

export const apiRouter=new MainRouter()