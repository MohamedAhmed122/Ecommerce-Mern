import React, { useEffect } from 'react'

import { productList } from '../../Redux/products/ProductList/ProductListAction'

import ProductCard from '../../Components/ProductCard/ProductCard'
import {  useDispatch, useSelector } from 'react-redux'

import './style.css'
import Alert from '../../Components/Alert/Alert'
import Loading from '../../Common/Loading'


export default function HomePage() {

  const { products, loading, error } = useSelector(state => state.productList)
  const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(productList())
    
    },[dispatch])

    if( loading) return <Loading />
    return (
      <div>
        <div className='home_page'  >
          {error && <Alert  severity="error">{error}</Alert>}
          {
              products.map(product =>(
                  <ProductCard key={product.name} product={product}  />
              )
            )
          }
        </div>
      </div>
    )
}

