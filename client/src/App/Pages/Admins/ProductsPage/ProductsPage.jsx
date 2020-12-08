import React, { useEffect } from 'react'

import {useDispatch, useSelector } from 'react-redux'

import { productList } from "../../../Redux/products/ProductList/ProductListAction"
import { adminDeleteProduct } from '../../../Redux/Admin/Admin-delete-product/RemoveProductAction'
import { adminCreateProduct } from '../../../Redux/Admin/Admin-create-product/CreateProductAction'

import Loading from '../../../Common/Loading'

import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { 
    Button, 
    ButtonGroup, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow 
} from '@material-ui/core';
import CustomButton from '../../../Components/CustomButton/CustomButton';



export default function ProductListPage({history}) {

    const dispatch = useDispatch()
    const { products, } = useSelector(state => state.productList) 
    const { currentUser } = useSelector(state => state.user)
    const { success : successDelete  } = useSelector(state => state.adminRemoveProduct)
    const { success : successCreate  } = useSelector(state => state.createProduct)


    useEffect(()=>{
        if(currentUser.isAdmin === "true"){
            dispatch(productList())
        }else{
            history.push('/login')
        }
    },[dispatch, successDelete, history,successCreate, currentUser])

    if(!products) return<Loading />
    return (
      
        <div className='users_table'>
            
            <TableContainer component={Paper} style={{marginBottom: 40}}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align='center'>NAME</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                        <TableCell align="right">CATEGORY</TableCell>
                        <TableCell align="right">BRAND</TableCell>
                        <TableCell align="center">ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell component="th" scope="row">
                                {product._id}
                            </TableCell>
                            <TableCell align="center">{product.name}</TableCell>
                            <TableCell align="right">{product.price}</TableCell>
                            <TableCell align="right">{product.category} </TableCell>
                            <TableCell align="right">{product.brand} </TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button 
                                    onClick={()=> history.push(`/admin/product/${product._id}/edit`)}
                                    style={{color: 'black'}}>
                                        <EditIcon />
                                    </Button>
                                    <Button 
                                    style={{color: 'red'}} 
                                    onClick={()=> dispatch(adminDeleteProduct(product._id))}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CustomButton title='Create New' onClick={()=> dispatch(adminCreateProduct())} />
        </div>
    )
}
