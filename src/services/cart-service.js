import {cartDaoMongo} from '../daos/mongodb/cart-dao.js'
import {productService} from './product-service.js'
import CustomError from '../utils/custom-error.js'

export default class CartService{
    constructor(dao){
        this.dao=dao
    }

    getCartById=async(id)=>{
        try{
            const cart=await this.dao.getById(id)
            if(!cart)throw new CustomError('Cart not found',404)
            return cart
        }catch(error){
            throw new Error(error.message)
        }
    }

    checkProductInCart=async(cartId,productId)=>{
        try{
            const productInCart=await this.dao.existProdInCart(cartId,productId)
            if(!productInCart)throw new CustomError('Product not found in cart',404)
            return productInCart
        }catch(error){
            throw new Error(error.message)
        }
    }

    addProductToCart=async(cartId,productId)=>{
        try{
            const cart=await this.getCartById(cartId)
            const product=await productService.getById(productId)
            return await this.dao.addProdToCart(cart._id,product._id)
        }catch(error){
            throw new Error(`Error adding product to cart: ${error.message}`)
        }
    }

    removeProductFromCart=async(cartId,productId)=>{
        try{
            const cart=await this.getCartById(cartId)
            await this.checkProductInCart(cartId,productId)
            return await this.dao.removeProdToCart(cart._id,productId)
        }catch(error){
            throw new Error(`Error removing product from cart: ${error.message}`)
        }
    }

    updateProductQuantity=async(cartId,productId,quantity)=>{
        try{
            const cart=await this.getCartById(cartId)
            await this.checkProductInCart(cartId,productId)
            return await this.dao.updateProdQuantityToCart(cart._id,productId,quantity)
        }catch(error){
            throw new Error(`Error updating product quantity: ${error.message}`)
        }
    }

    clearCart=async(cartId)=>{
        try{
            const cart=await this.getCartById(cartId)
            return await this.dao.clearCart(cart._id)
        }catch(error){
            throw new Error(`Error clearing cart: ${error.message}`)
        }
    }
}

export const cartService=new CartService(cartDaoMongo)