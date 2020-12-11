import express from 'express'
import { 
    CreateOrder, 
    getOrder, 
    getAllOrders, 
    updatePaidOrder
} from '../Controllers/OrderController.js'
import { protect, admin } from '../middleware/authMidleware.js'


const router = express.Router()


router.route('/')
    .post(protect, CreateOrder)
    .get(protect, admin, getAllOrders)
    
router.route('/:id').get(protect, getOrder)
router.route('/:id/pay').put(protect, updatePaidOrder)


export default router