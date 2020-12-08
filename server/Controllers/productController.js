import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'



// @desc   Fetch all products 
//@route   Get /api/products
//@Access  Public
export const getProducts = asyncHandler (async (req, res) =>{
    const products = await Product.find({})
    res.json(products)
})

//@desc   Fetch a single product by its id
//@route   Get /api/products/:id
//@Access  Public
export const getProductById = asyncHandler (async (req, res) =>{
    const product = await Product.findById(req.params.id)
    if(product){     
        res.json(product) 
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})


// @desc    Delete product
// @route   DELETE /api/product/:id
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
 
    if(product){
       await product.remove()
       res.json({message : "product has Been deleted"})
    }else{
       res.status(404)
       res.json({message : "product Not Found"})
    }
  
  })