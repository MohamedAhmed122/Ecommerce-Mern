import express from 'express'
import { CreateOrder, getOrder} from '../Controllers/OrderController.js'
import { protect } from '../middleware/authMidleware.js'


const router = express.Router()


router.route('/').post(protect, CreateOrder)
router.route('/:id').get(protect, getOrder)


export default router