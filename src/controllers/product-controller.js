import{productService}from'../services/product-service.js'

class ProductController{
    constructor(service){
        this.service=service
    }

    getAll=async(req,res,next)=>{
        try{
            const products=await this.service.getAll()
            res.status(200).json(products)
        }catch(error){
            next(error)
        }
    }

    getById=async(req,res,next)=>{
        try{
            const{id}=req.params
            const product=await this.service.getById(id)
            res.status(200).json(product)
        }catch(error){
            next(error)
        }
    }

    create=async(req,res,next)=>{
        try{
            const product=req.body
            const newProduct=await this.service.create(product)
            res.status(201).json(newProduct)
        }catch(error){
            next(error)
        }
    }

    update=async(req,res,next)=>{
        try{
            const{id}=req.params
            const updatedProduct=await this.service.update(id,req.body)
            res.status(200).json(updatedProduct)
        }catch(error){
            next(error)
        }
    }

    delete=async(req,res,next)=>{
        try{
            const{id}=req.params
            const deletedProduct=await this.service.delete(id)
            res.status(200).json(deletedProduct)
        }catch(error){
            next(error)
        }
    }

    deleteAll=async(req,res,next)=>{
        try{
            await this.service.deleteAll()
            res.send('products deleted successfully')
        }catch(error){
            next(error)
        }
    }
}

export const productController=new ProductController(productService)