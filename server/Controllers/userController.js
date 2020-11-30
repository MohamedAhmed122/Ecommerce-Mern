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


// @desc   register new user 
//@route   GET /api/users
//@Access  Public
export const registerUser = asyncHandler (async (req, res) =>{
   const {name, email, password} = req.body;

   const userExist = await User.findOne({email})

   if(userExist) {
      res.status(400)
      throw new Error("User's already exist")
   }

   const user = await User.create({
      name,
      email,
      password
   })
   if (user){
      res.status(201).json({
         id : user._id,
         email: user.email,
         name: user.name,
         isAdmin: user.isAdmin,
         token: generateWebToken(user._id)
      })
   }else{
      res.status(400)
      throw new Error('Incorrect Data')
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

// @desc   update user profile
//@route   POST /api/users/profile
//@Access  Private
export const updateUserProfile = asyncHandler (async (req, res) =>{
   const user = await User.findById(req.user._id)
   if (user){
      user.email = req.body.email || user.email;
      user.name = req.body.name || user.name;
      if (req.body.password){
         user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.json({
         _id : updatedUser._id,
         email: updatedUser.email,
         name: updatedUser.name,
         isAdmin: updatedUser.isAdmin,
         token: generateWebToken(updatedUser._id)
      })
   }else{
      res.status(404)
      throw new Error("User Not Found")
   }
})