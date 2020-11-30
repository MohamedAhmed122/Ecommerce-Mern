import express from 'express'
import { authUser, getUserProfile, registerUser, updateUserProfile }  from '../Controllers/userController.js'
import { protect } from '../middleware/authMidleware.js'


const router = express.Router()

router.route('/').post(registerUser)

router.post('/login', authUser)

router.route('/profile').get(protect, getUserProfile)


router.route('/profile').put(protect, updateUserProfile)


export default router;