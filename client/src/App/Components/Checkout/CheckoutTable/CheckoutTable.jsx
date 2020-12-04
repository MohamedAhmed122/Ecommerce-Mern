import React  from 'react'
import { Card } from '@material-ui/core'
import CustomButton from '../../CustomButton/CustomButton'

import './CheckoutTable.css'

export default function Table() {

 
    return (
        <Card className='table'> 
            <div className='table__item'>

            </div>
            <div className='table__item'>

            </div>
            <div className='table__item'>

            </div>
            <div className='table__bnt'>
               <CustomButton title='Add To Cart'  />
            </div>
        </Card>
    )
}
