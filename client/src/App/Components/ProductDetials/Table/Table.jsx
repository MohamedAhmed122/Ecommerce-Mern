import { Card } from '@material-ui/core'
import React from 'react'
import CustomButton from '../../CustomButton/CustomButton'

import './StyleTable.css'

export default function Table({price, countInStock}) {
    return (
        <Card className='table'> 
            <div className='table__item'>
                <p>Price</p>
                <p>${price}</p>
            </div>
            <div className='table__item'>
                <p>Status</p>
                <p>{countInStock > 0 ? 'in Stocks' : 'out of stock'}</p>
            </div>
            <div className='table__item'>
                <p>Qyt</p>
                <p>number</p>
            </div>
            <div className='table__bnt'>
               <CustomButton title='Add To Cart' disabled={countInStock === 0} />
            </div>
        </Card>
    )
}
