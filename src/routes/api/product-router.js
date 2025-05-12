import{Router}from'express'
import{productController}from'../../controllers/product-controller.js'
import{validatorParams}from'../../middlewares/validators/product-validator.js'

const router=Router()

router.route('/')
    .get(productController.getAll)
    .post(productController.create)
    .delete(productController.deleteAll)

router.route('/:id')
    .get(validatorParams,productController.getById)
    .put(productController.update)
    .delete(productController.delete)

export default router