import{Router}from'express'
const router=Router()

import {
    getAllProducts,
    getById,
    createProduct,
    update,
    deleteProductById,
    deleteProducts
}from'../controllers/product.controllers.js'

router.route('/')
    .get(getAllProducts)
    .post(createProduct)
    .delete(deleteProducts)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteProductById)

export default router