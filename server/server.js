import express from'express';
import dotenv from'dotenv'
import products from'./data/products.js';
import connectDB from '../config/db.js';


dotenv.config()
const app = express();

app.get('/',(req, res)=>{
    res.send('Api is Running .... . .. . .')
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p => p.id === req.params.id)
    res.json(product)
})
const PORT = process.env.PORT|| 5000;

connectDB()

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}`))