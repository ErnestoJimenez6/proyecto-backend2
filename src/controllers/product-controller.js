import {productService} from '../services/product-service.js'
import {createResponse} from '../utils.js'

class ProductController{
    constructor(service){
        this.service=service
    }

    getAll=async(req,res,next)=>{
        try{
            const products=await this.service.getAll()
            createResponse(res,200,products)
        }catch(error){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const product=await this.service.getById(id)
            createResponse(res,200,product)
        }catch(error){
            next(error)
        }
    }

    create=async(req,res,next)=>{
        try{
            const newProduct=await this.service.create(req.body)
            createResponse(res,201,newProduct)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const updatedProduct=await this.service.update(id,req.body)
            createResponse(res,200,updatedProduct)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const deletedProduct=await this.service.delete(id)
            createResponse(res,200,deletedProduct)
        }catch(error){
        next(error)
        }
    }

    deleteAll=async(req,res,next)=>{
        try{
            await this.service.deleteAll()
            createResponse(res,200,'All products deleted successfully')
        }catch (error){
            next(error)
        }
    }
}

export const productController=new ProductController(productService)