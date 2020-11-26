const express = require('express');
// import express from 'express'
const products =require ('./data/products');
const app = express();

app.get('/',(req, res)=>{
    res.send('Api is Running ///////')
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p => p.id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('app is runing on poert 5000'))