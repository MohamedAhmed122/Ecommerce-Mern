import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'



// @desc   Fetch all products 
//@route   Get /api/products?keyword
//@Access  Public
export const getProducts = asyncHandler (async (req, res) =>{

    const keyword = req.query.keyword ? {
      name :{
        $regex : req.query.keyword,
        $options : 'i'
      }
    } : {}
    const products = await Product.find({...keyword})
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


// @desc    Create New product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        user: req.user._id,
        name: 'Sample Name',
        image: '/images/sample.jpeg',
        description:'Sample description',
        brand: 'Sample brand',
        category: 'Sample category',
        price: 0,
        countInStock: 0,
    })

    const createdProduct = await product.save();
  
    res.status(201).json(createdProduct) 
})


// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
     } = req.body

     const product = await Product.findById(req.params.id)
     if(product){
        product.name = name
        product.image = image
        product.description = description
        product.brand = brand
        product.category = category
        product.price = price
        product.countInStock = countInStock  

        const updatedProduct = await product.save();
  
        res.json(updatedProduct) 

     }else{
         res.status(404)
         throw new Error('Product Not Found')
     }
})

// @desc    Create Review for product
// @route   POST /api/products/:id/reviews
// @access  Private
export const reviewProduct = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const product = await Product.findById(req.params.id)
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Product already reviewed')
      }
  
      const review = {
         name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      product.reviews.push(review)
  
      product.numReviews = product.reviews.length
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length
  
      await product.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})