import React, { useEffect, useState } from 'react'
 import ProductCard from '../../Components/ProductCard/ProductCard'
 import axios from 'axios'


import './style.css'

export default function HomePage() {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
      
      const fetchData = async()=>{
        try {
            const {data} = await axios.get(`/api/products`)
            setProducts(data)
            
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
    },[])


    return (
        <div className='home_page'  >
          {
              products.map(product =>(
                  <ProductCard key={product.name} product={product}  />
              )
            )
          }
        </div>
    )
}

