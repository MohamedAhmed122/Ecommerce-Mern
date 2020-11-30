import React from 'react'

import { useHistory } from "react-router-dom";


import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';

import './StyleCard.css'

export default function ProductCard({product}) {
    const history = useHistory()
    const {name, numReviews,rating, price,image, _id} = product;
    return (
        <div>
            <Card className='card' onClick={() =>history.push(`/product/${_id}`)}> 
                <CardActionArea>
                    <CardMedia 
                        style={{height: 250}}
                        image={image}
                        title={name}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="pristine" value={rating} />
                        </Box>
                        <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ({numReviews? numReviews : 0 }) reviews
                            </Typography>
                            <Typography color="textSecondary" variant="h5" component="h2">
                                ${price}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color='default' onClick={() =>history.push(`/product/${_id}`)}>
                        View
                    </Button>
                </CardActions>
            </Card>
        </div>
   
    )
}
