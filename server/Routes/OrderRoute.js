import express from 'express'
import { CreateOrder} from '../Controllers/OrderController.js'
import { protect } from '../middleware/authMidleware.js'


const router = express.Router()


router.route('/').post(protect, CreateOrder)


export default router