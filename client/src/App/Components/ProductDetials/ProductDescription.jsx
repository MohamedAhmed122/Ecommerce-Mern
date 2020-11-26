import React from 'react'

import './StyleDetailHeader.css'

import { Box, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

export default function ProductDescription({product}) {
    return (
        <div className='product_description'>
            <Typography  variant="h5" component="h2">
                 Descripation
            </Typography>
            <Typography className='description' variant="body2" color="textSecondary" component="p">
                {product.description}
            </Typography>
            <Typography style={{marginTop:20}}  variant="h5" component="h2">
                Reviews
            </Typography>
            <Box className='detials_header__box' component="fieldset" mb={3} borderColor="transparent">
                <Rating name="pristine" value={2} />
            </Box>
            <Box className='detials_header__box' component="fieldset" mb={3} borderColor="transparent">
                <Rating name="pristine" value={3} />
            </Box>
        </div>
    )
}
