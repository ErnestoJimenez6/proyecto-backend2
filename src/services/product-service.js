import{productDao}from'../daos/mongodb/product-dao.js'
import CustomError from'../utils/custom-error.js'

class ProductService{
    constructor(dao){
        this.dao=dao
    }

    async getAll(filter={},options={}){
        try{
            const products=await this.dao.getAll(filter,options)
            if(!products||products.length===0){
                throw new CustomError('No products found',404)
            }
            return products
        }catch(error){
            throw this.handleError(error)
        }
    }

    async getById(id){
        try{
            const product=await this.dao.getById(id)
            if(!product){
                throw new CustomError(`Product with id ${id} not found`,404)
            }
            return product
        }catch(error){
            throw this.handleError(error)
        }
    }

    async create(productData){
        try{
            if(!productData.title||!productData.price){
                throw new CustomError('Title and price are required',400)
            }
            const newProduct=await this.dao.create(productData)
            return newProduct
        }catch(error){
            throw this.handleError(error)
        }
    }

    async update(id,updateData){
        try{
            const updatedProduct=await this.dao.update(id,updateData)
            if(!updatedProduct){
                throw new CustomError(`Product with id ${id} not found`,404)
            }
            return updatedProduct
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async delete(id){
        try{
            const deletedProduct=await this.dao.delete(id)
            if(!deletedProduct){
                throw new CustomError(`Product with id ${id} not found`,404)
            }
            return deletedProduct
        }catch(error){
            throw this.handleError(error)
        }
    }

    handleError(error){
        if (error instanceof CustomError) {
            return error
        }
        console.error('ProductService Error:',error.message)
        return new CustomError('Internal Server Error',500)
    }
}

export const productService=new ProductService(productDao)