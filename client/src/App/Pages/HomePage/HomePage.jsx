import React, { useEffect } from 'react'

import { productList } from '../../Redux/products/ProductList/ProductListAction'

import ProductCard from '../../Components/ProductCard/ProductCard'
import {  useDispatch, useSelector } from 'react-redux'

import './style.css'
import Loading from '../../Common/Loading'
import Paginate from '../Paginate/Paginate';
import { Container } from '@material-ui/core';


export default function HomePage({match, history}) {

  const { products, loading, pages, page } = useSelector(state => state.productList)
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber
  const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(productList(keyword, pageNumber))
    
    },[dispatch, keyword, pageNumber])


    if( loading) return <Loading  />
    return (
      <div>
        <div className='home_page'  >
          {/* {error && <Alert  severity="error">{error}</Alert>} */}
          {
              products?.map(product =>(
                  <ProductCard key={product.name} product={product}  />
              )
            )
          }
        </div>
        <Container>
          <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
        </Container>
      </div>
    )
}

