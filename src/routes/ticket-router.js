import {Router} from 'express'
import {passportCall} from '../middlewares/passport-call.js'
import {ticketController} from '../controllers/ticket-controller.js'

const router=Router()

router.post('/purchase',[passportCall('jwt',{session:false})],ticketController.generateTicket)

export default router