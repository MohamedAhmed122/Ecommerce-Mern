import express from 'express';
import dotenv from 'dotenv'
import path from 'path'
import colors from 'colors'
import morgan from 'morgan'


import productRouter from './Routes/productRoutes.js'
import userRouter from './Routes/userRouter.js'
import ordersRouter from './Routes/OrderRoute.js'
import uploadRouter from './Routes/UploadsRoute.js'

import connectDB from './config/db.js';

import { notFound, errorHandler } from './middleware/errorHandler.js'


dotenv.config()

const app = express();

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Api is Running .... . .. . .')
})

app.get('/api/config/paypal',(req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/upload', uploadRouter)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT = process.env.PORT|| 5000;

connectDB()

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`app is runing in ${process.env.NODE_ENV} on port ${PORT}` .blue.underline ))