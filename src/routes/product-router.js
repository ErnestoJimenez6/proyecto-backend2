import{Router}from'express'
import{productController}from'../controllers/product-controller.js'

const router=Router()

router.route('/product/:productId')
    .get(productController.getAll)
    .post(productController.create)
    .delete(productController.deleteAll)

router.route('/:id')
    .get(productController.getById)
    .put(productController.update)
    .delete(productController.delete)

export default router