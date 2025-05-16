import {ticketDaoMongo} from '../daos/mongodb/ticket-dao.js'
import {cartService} from './cart-service.js'
import {productService} from './product-service.js'
import CustomError from '../utils/custom-error.js'

export default class TicketService{
    constructor(dao){
        this.dao=dao
    }

    generateTicket=async (user)=>{
        try{
            const cart=await cartService.getById(user.cart)
            let amountAcc=0
            // const prodsNoStock=[]
            for(const prod of cart.products){
                const idProd=prod.product
                const prodDB=await productService.getById(idProd)
                if(prod.quantity>prodDB.stock){
                    // prodsNoStock.push(idProd)
                    throw new CustomError(
                        'la cantidad supera el stock del producto',
                        404
                    )
                }
                const amount=prod.quantity*prodDB.price
                amountAcc+=amount
            }

            const ticket=await this.dao.create({
                code:`${Math.random() * 1000}`,
                purchase_datetime:new Date().toLocaleString(),
                amount:amountAcc,
                purchaser:user.email,
            })
            await cartService.clearCart(user.cart)
            return ticket
        }catch(error){
            throw new Error(error)
        }
    }
}

export const ticketService = new TicketService(ticketDaoMongo);