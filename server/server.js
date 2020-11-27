import express from'express';
import dotenv from'dotenv'
import productRouter from './Routes/productRoutes.js'
import colors from 'colors'
import connectDB from './config/db.js';


dotenv.config()
const app = express();

app.get('/',(req, res)=>{
    res.send('Api is Running .... . .. . .')
})

app.use('/api/products', productRouter)

const PORT = process.env.PORT|| 5000;

connectDB()

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))