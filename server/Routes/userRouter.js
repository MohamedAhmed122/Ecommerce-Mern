import express from 'express'
import { protect, admin } from '../middleware/authMidleware.js'
import { 
  authUser, 
  getUserProfile, 
  getUsers, 
  registerUser, 
  updateUserProfile 
}  from '../Controllers/userController.js'


const router = express.Router()

router.route('/').post(registerUser).get(protect,admin, getUsers)

router.post('/login', authUser)




router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)


export default router;