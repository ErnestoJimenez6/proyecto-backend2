import {productDaoMongo} from '../daos/mongodb/product-dao.js'
import CustomError from '../utils/custom-error.js'

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

    async create(productData) {
        try {
            if(!productData.title||!productData.price){
                throw new CustomError('Title and price are required',400)
            }

            if(productData.price<=0){
                throw new CustomError('Price must be greater than zero',400)
            }

            const newProduct=await this.dao.create(productData)
            return newProduct
        }catch(error){
            throw this.handleError(error)
        }
    }

    async update(id,updateData){
        try{
            await this.getById(id)
            const updatedProduct=await this.dao.update(id,updateData)
            return updatedProduct
        }catch(error){
            throw this.handleError(error)
        }
    }

    async delete(id){
        try{
            await this.getById(id)
            const deletedProduct=await this.dao.delete(id)
            return{
                success:true,
                message:`Product with id ${id} deleted successfully`,
                deletedProduct
            }
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async getByCategory(category){
        try{
            const products=await this.dao.getAll({category})
            if(!products||products.length===0){
                throw new CustomError(`No products found in category ${category}`,404)
            }
            return products
        }catch(error){
            throw this.handleError(error)
        }
    }

    handleError(error){
        if(error instanceof CustomError){
            return error
        }
            console.error('ProductService Error:',error.message)
            return new CustomError('Internal Server Error',500)
    }
}

export const productService = new ProductService(productDaoMongo)