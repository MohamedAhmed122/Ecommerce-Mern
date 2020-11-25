import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import products from './products'

import './style.css'

export default function HomePage() {
    return (
        <div className='home_page'  >
          {
              products.map(product =>(
                  <div >
                  <ProductCard key={product.name} product={product}  />
                </div>
              )
            )
          }
        </div>
    )
}

