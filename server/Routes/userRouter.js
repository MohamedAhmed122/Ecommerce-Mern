import express from 'express'
import { protect, admin } from '../middleware/authMidleware.js'
import { 
  authUser, 
  deleteUser, 
  getUserProfile, 
  getUsers, 
  registerUser, 
  updateUserProfile 
}  from '../Controllers/userController.js'


const router = express.Router()

router.route('/').post(registerUser).get(protect,admin, getUsers)

router.post('/:id', protect,admin, deleteUser)

router.post('/login', authUser)



router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)


export default router;