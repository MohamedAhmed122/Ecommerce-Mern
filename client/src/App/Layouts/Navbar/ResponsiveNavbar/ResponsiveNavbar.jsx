import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { userLogout } from '../../../Redux/user/UserAction'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FaceIcon from '@material-ui/icons/Face';
import './StyleResponsiveNavbar.css'
import { IconButton } from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SettingsIcon from '@material-ui/icons/Settings';

const ResponsiveHeader = () =>{ 
    const {isAuthenticated, currentUser} = useSelector(state => state.user)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleRouting = (router) =>{
        if(router === 'home'){
            history.push('/')
        }
        if(router === 'cart'){
            history.push('/cart')
        }
        if(router === 'login'){
            history.push('/login')
        }           
        if(router === 'users'){
            history.push('/admin/userList')
        }
        if(router === 'orders'){
            history.push('/admin/ordersList')
        }
        if(router === 'products'){
            history.push('/admin/productsList')
        }
        if(router === 'profile'){
            history.push('/profile')
        }
    }
    const handleLogout =() =>{
        history.push('/')
        dispatch(userLogout())
    }
    

    return(
        <div className='responsive_navbar'>
            <div className='item'  onClick={()=> handleRouting('home')} >
                <IconButton>  <HomeIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                <p>Home</p>
            </div>
            <div className='item' onClick={()=> handleRouting('cart')}>
                <IconButton>  <ShoppingBasketIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                <p>Cart</p>
            </div>
           {!isAuthenticated && <div className='item' onClick={()=> handleRouting('login')}>
                <IconButton>  <ExitToAppIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                <p>Log In</p>
            </div>}
            {
                // isAuthenticated &&
                currentUser?.isAdmin === "true"?
                <>
                    <div className='item'  onClick={()=> handleRouting('users')} >
                        <IconButton>  <FaceIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>Users</p>
                    </div>
                    <div className='item' onClick={()=> handleRouting('orders')}>
                        <IconButton>  <AddAlertIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>Orders</p>
                    </div>
                    <div className='item' onClick={()=> handleRouting('products')}>
                        <IconButton>  <CategoryIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>Products</p>
                    </div>
                    <div className='item' onClick={handleLogout}>
                        <IconButton>  <ExitToAppIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>Log Out</p>
                    </div>
                </> : isAuthenticated &&
                <> 
                    <div className='item' onClick={()=> handleRouting('profile')}>
                        <IconButton>  <SettingsIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>My Account</p>
                    </div>
                    <div className='item' onClick={handleLogout}>
                        <IconButton>  <ExitToAppIcon fontSize='large' style={{color:'white'}} /> </IconButton>
                        <p>Log Out</p>
                    </div>
                </> 
            }
              
        </div>
        // <> </>
  )
}
  export default ResponsiveHeader
