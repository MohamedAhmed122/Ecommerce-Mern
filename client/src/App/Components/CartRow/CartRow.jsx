import { Card, Container, IconButton, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FromSelect from '../FromSelect/FromSelect';
import {addToCart} from '../../Redux/cart/CartAction'

import { useDispatch } from 'react-redux'

import './styleCartRow.css'


export default function CartRow({item: {image,countInStock, qty, product, name, price} }) {

    const dispatch = useDispatch()
    return (
        <Container>
            <div className='cartRow'>
                <div className='cartRow__image'>
                    <Card>
                        <img src={image} alt='' />
                    </Card>
                </div>
                <div  className='cartRow__title'>
                <Typography gutterBottom variant="h6" align='center' component="h4">
                    {name}
                </Typography>
                </div>
                <div  className='cartRow__price'>
                    <p>${price}</p>
                </div>
                <div  className='cartRow__from'>
                    <FromSelect 
                    selectValue={qty} 
                    maniValue={qty}
                    onChange={(e) =>dispatch(addToCart(product, Number(e.target.value)))}
                    >
                         {
                        [...Array(countInStock).keys()].map(num =>(
                                <MenuItem key={num+1} value={num+1}>{num +1}</MenuItem>
                        ))
                    }
                    </FromSelect>
                </div>
                <div  className='cartRow__delete'>
                    <IconButton>
                        <DeleteIcon fontSize='large' style={{color:'#D32F2F'}} />
                    </IconButton>

                </div>
            </div>
            <hr className='divider'/>
        </Container>
    )
}
