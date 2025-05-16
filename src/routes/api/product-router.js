import {Router} from 'express'
import {passportCall} from '../../middlewares/passport-call.js'
import {checkRole} from '../../middlewares/auth/check-role.js'
import {productController} from '../../controllers/product-controller.js'

const router=Router()

router.get('/',[passportCall('jwt',{session:false})],productController.getAll)

router.get('/:id',[passportCall('jwt',{session:false}),checkRole(['admin'])],productController.getById)

router.post('/',[passportCall('jwt',{session:false}),checkRole(['admin'])],productController.create)

router.put('/:id',[passportCall('jwt',{session:false}),checkRole(['admin'])],productController.update)

router.delete('/:id',[passportCall('jwt',{session:false}),checkRole(['admin'])],productController.delete)

export default router