import React, { useEffect, useState } from 'react'

import { productList } from '../../Redux/products/ProductList/ProductListAction'

import ProductCard from '../../Components/ProductCard/ProductCard'
import {  useDispatch, useSelector } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';

import './style.css'
import Loading from '../../Common/Loading'
import Paginate from '../Paginate/Paginate';
// import Paginate from '../Paginate/Paginate';


export default function HomePage({match, history}) {

  const { products, loading, pages, page } = useSelector(state => state.productList)
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber
  const [value, setValue] = useState()
  console.log(value);
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
        <Paginate
             pages={pages}
             page={page}
             keyword={keyword ? keyword : ''}
          />
      </div>
    )
}

