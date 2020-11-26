import React from 'react'
import { Link,  } from 'react-router-dom'
import CustomInput from '../../Components/CustomInput/CustomInput'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import './StyleNavbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
                <Link to='/'>
                    Logo
                </Link>
            </div>
            <div className='navbar__search'> 
                <CustomInput Icon={SearchIcon}  placeholder='Search for products'/>
            </div>
            <div className='links'>
                <div className='link'>
                     <Link  to='/cart'>Cart</Link>
                     <ShoppingBasketIcon  />
                </div>
                <div className='link'>
                    <Link  to='/login'>Login</Link>
                    <PersonIcon />
                </div>
            </div>
        </div>
    )
}
