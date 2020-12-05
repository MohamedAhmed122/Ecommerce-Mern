import express from 'express'
import { CreateOrder, getOrder, updatePaidOrder} from '../Controllers/OrderController.js'
import { protect } from '../middleware/authMidleware.js'


const router = express.Router()


router.route('/').post(protect, CreateOrder)
router.route('/:id').get(protect, getOrder)
router.route('/:id/pay').put(protect, updatePaidOrder)

export default router