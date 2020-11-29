import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {generateWebToken} from '../utility/generateWebToken.js'


// @desc   Auth user & get Token
//@route   POST /api/users/login
//@Access  Public
export const authUser = asyncHandler (async (req, res) =>{
   const {email, password} = req.body;

   const user = await User.findOne({email})

   if (user && (await user.matchPassword(password))){
      res.json({
         _id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         token: generateWebToken(user._id)

      })
   }else{
      res.status(401);
      throw new Error('Invalid Email or/and Password')
   }
})




// @desc   get user profile
//@route   GET /api/users/profile
//@Access  Private
export const getUserProfile = asyncHandler (async (req, res) =>{
   const user = await User.findById(req.user._id)
   if (user){
      res.json({
         _id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
      })
   }else{
      res.status(404)
      throw new Error("User Not Found")
   }
})