import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'
import CustomInput from '../../Components/CustomInput/CustomInput'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import './StyleNavbar.css'
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';
import NavMenu from './NavMenu/NavMenu';

export default function Navbar() {
    const {currentUser, isAuthenticated} = useSelector(state =>state.user)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = (e) => {
        if(isAuthenticated){
            setAnchorEl(e.currentTarget);
            setOpenMenu(true);

        }
      };
    
  
   
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
                <div className='link' onClick={handleClick}>
                  { isAuthenticated? currentUser.name : <Link to='/login'>Login</Link>}
                   
                    <PersonIcon />
                   <NavMenu 
                   setAnchorEl={setAnchorEl} 
                   setOpenMenu={setOpenMenu}  
                   openMenu={openMenu} 
                   anchorEl={anchorEl} 
                   currentUser={currentUser}/>
                </div>
            </div>
        </div>
    )
}
