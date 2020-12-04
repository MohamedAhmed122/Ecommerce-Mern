import Order from '../models/orderModels.js'
import asyncHandler from 'express-async-handler'



// @desc   Create New Order
//@route   POST /api/orders
//@Access  Private
export const CreateOrder = asyncHandler (async (req, res) =>{
   const {
       orderItems,
       shippingAddress,
       paymentMethod,
       itemsPrice,
       taxPrice,
       shippingPrice,
       totalPrice
   } = req.body;

   if(orderItems && orderItems.length === 0){
       res.status(400);
       throw new Error('No orders Son of Bitch')
       return;
   }else{
        const order = new Order({
            user: req.user._id,
            productItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })     

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
   }
})