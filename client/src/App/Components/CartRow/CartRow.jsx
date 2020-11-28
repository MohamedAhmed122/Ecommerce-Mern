import { Card, Container, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import FromSelect from '../FromSelect/FromSelect';
import './styleCartRow.css'
export default function CartRow({ item: {image, name, price} }) {
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
                    <FromSelect></FromSelect>
                </div>
                <div  className='cartRow__delete'>
                    <IconButton>
                        <DeleteIcon fontSize='large' style={{color:'#F44336'}} />
                    </IconButton>

                </div>
            </div>
            <hr className='divider'/>

        </Container>
    )
}
