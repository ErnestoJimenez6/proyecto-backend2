import {Router} from'express'
import {passportCall} from '../middlewares/passport-call.js'
import {checkRole} from '../middlewares/auth/check-role.js'
import {cartController} from '../controllers/cart-controller.js'

const router=Router()

router.get('/',passportCall('jwt',{session:false}),checkRole(['admin']),cartController.getAll)

router.get('/:id',passportCall('jwt',{session:false}),cartController.getById)

router.post('/',passportCall('jwt',{session:false}),checkRole(['admin']),cartController.create)

router.put('/:id',passportCall('jwt',{session:false}),checkRole(['admin']),cartController.update)

router.delete('/:id',passportCall('jwt',{session:false}),checkRole(['admin']),cartController.delete)

router.post('/products/:idProd',passportCall('jwt',{session:false}),cartController.addProduct)

router.delete('/:idCart/products/:idProd',passportCall('jwt', { session: false }),cartController.removeProduct)

router.put('/:idCart/products/:idProd',passportCall('jwt', { session: false }),cartController.updateProductQuantity)

router.delete('/clear/:Idcart',passportCall('jwt', { session: false }),cartController.clearCart)

export default router