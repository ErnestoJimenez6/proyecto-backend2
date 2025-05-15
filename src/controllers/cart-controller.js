import {cartService} from '../services/cart-service.js'
import {createResponse} from '../utils.js'

export default class CartController{
    constructor(service){
        this.service=service
    }

    create=async(req,res,next)=>{
        try{
            const newCart=await this.service.create(req.body)
            createResponse(res,201,newCart)
        }catch(error){
            next(error)
        }
    }

    getAll=async(req,res,next)=>{
        try{
            const carts=await this.service.getAll()
            createResponse(res,200,carts)
        }catch(erroR){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const cart=await this.service.getById(id)
            createResponse(res,200,cart)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const updatedCart=await this.service.update(id,req.body)
            createResponse(res,200,updatedCart)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const result=await this.service.delete(id)
            createResponse(res,200,{ 
                message:'Cart deleted successfully', 
                result 
            })
        }catch(error){
            next(error)
        }
    }

    addProduct=async(req,res,next)=>{
        try{
            const{cartId}=req.params
            const{productId}=req.params
            const cart=await this.service.addProduct(cartId,productId)
            createResponse(res,200,cart)
        }catch(error){
            next(error)
        }
    }

    removeProduct=async(req,res,next)=>{
        try{
            const{cartId,productId}=req.params
            const cart=await this.service.removeProduct(cartId, productId)
            createResponse(res,200,{
                message:`Product ${productId} removed from cart`,
                cart
            })
        }catch(error){
            next(error)
        }
    }

    updateProductQuantity=async(req,res,next)=>{
        try{
            const{cartId,productId}=req.params
            const{quantity}=req.body
            const cart=await this.service.updateProductQuantity(
                cartId, 
                productId, 
                quantity
            )
            createResponse(res,200,cart)
        }catch(error){
            next(error)
        }
    }

    clearCart=async(req,res,next)=>{
        try{
            const{cartId}=req.params
            const cart=await this.service.clearCart(cartId)
            createResponse(res,200,{
                message:'Cart cleared successfully',
                cart
            })
        }catch(error){
            next(error)
        }
    }

    getCartByUser=async(req,res,next)=>{
        try{
            const{userId}=req.params
            const cart=await this.service.getCartByUser(userId)
            createResponse(res,200,cart)
        }catch(error){
            next(error)
        }
    }

    purchaseCart=async(req,res,next)=>{
        try{
            const{cartId}=req.params
            const purchase=await this.service.purchaseCart(cartId)
            createResponse(res,200,purchase)
        }catch(error){
            next(error)
        }
    }
}

export const cartController=new CartController(cartService)