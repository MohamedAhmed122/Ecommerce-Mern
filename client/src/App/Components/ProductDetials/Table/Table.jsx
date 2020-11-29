import { Card, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import CustomButton from '../../CustomButton/CustomButton'
import FromSelect from '../../FromSelect/FromSelect'

import './StyleTable.css'

export default function Table({price, countInStock}) {

    const history = useHistory()
    const { id } = useParams()
    const [qty, setQty] = useState(1)

    const handleSubmit = () =>{
        history.push(`/cart/${id}?qty=${qty}`)
    }
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
                <FromSelect selectValue={qty} onChange={(e)=>setQty(e.target.value)} maniValue={countInStock} >
                    {
                        [...Array(countInStock).keys()].map(num =>(
                                <MenuItem key={num+1} value={num+1}>{num +1}</MenuItem>
                        ))
                    }
                </FromSelect>
            </div>
            <div className='table__bnt'>
               <CustomButton title='Add To Cart' disabled={countInStock === 0} onClick={handleSubmit} />
            </div>
        </Card>
    )
}
