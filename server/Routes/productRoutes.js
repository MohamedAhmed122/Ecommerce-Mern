import express from 'express'
import { protect, admin } from '../middleware/authMidleware.js'

import {
    getProducts, 
    getProductById, 
    deleteProduct, 
    updateProduct, 
    createProduct,
    reviewProduct
} from '../Controllers/productController.js'


const router = express.Router()


router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct)

router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

router.route('/:id/reviews').post(protect, reviewProduct)

 
export default router