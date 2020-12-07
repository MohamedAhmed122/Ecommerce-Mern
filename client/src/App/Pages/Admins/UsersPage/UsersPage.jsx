import React, { useEffect } from 'react'

import {useDispatch, useSelector } from 'react-redux'
import { getUserList } from "../../../Redux/user/UserListAction"

import Loading from '../../../Common/Loading'

import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
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
    TableRow } from '@material-ui/core';

import './styleUsersPage.css'


export default function UsersPage({history}) {

    const dispatch = useDispatch()
    const {usersList } = useSelector(state => state.usersList) 
    const { currentUser } = useSelector(state => state.user)
    useEffect(()=>{
        if(currentUser.isAdmin){
            dispatch(getUserList())
        }else{
            history.push('/login')
        }
    },[dispatch, history, currentUser])

    if(!usersList) return<Loading />
    console.log(currentUser.isAdmin)
    return (
      
        <div className='users_table'>
            <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">NAME</TableCell>
                        <TableCell align="right">EMAIL</TableCell>
                        <TableCell align="right">ADMIN</TableCell>
                        <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList?.map((users) => (
                        <TableRow key={users._id}>
                            <TableCell component="th" scope="row">
                                {users._id}
                            </TableCell>
                            <TableCell align="right">{users.name}</TableCell>
                            <TableCell align="right">{users.email}</TableCell>
                            <TableCell align="right">
                                {users.isAdmin ? 
                                <CancelIcon fontSize='large' style={{color:'red'}} />
                                :
                                <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                }
                            </TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button style={{color: 'black'}}>
                                        <EditIcon />
                                    </Button>
                                    <Button style={{color: 'red'}}>
                                        <DeleteIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
