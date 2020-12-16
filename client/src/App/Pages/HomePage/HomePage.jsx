import React, { useEffect } from 'react'

import { productList } from '../../Redux/products/ProductList/ProductListAction'

import ProductCard from '../../Components/ProductCard/ProductCard'
import {  useDispatch, useSelector } from 'react-redux'

import './style.css'
import Loading from '../../Common/Loading'


export default function HomePage({match}) {

  const { products, loading } = useSelector(state => state.productList)
  const keyword = match.params.keyword
  const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(productList(keyword))
    
    },[dispatch, keyword])

    if( loading) return <Loading  />
    return (
      <div>
        <div className='home_page'  >
          {/* {error && <Alert  severity="error">{error}</Alert>} */}
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

