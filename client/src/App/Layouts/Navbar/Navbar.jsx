import React, { useEffect, useState } from 'react'
import { Link, useLocation,  } from 'react-router-dom'
import CustomInput from '../../Components/CustomInput/CustomInput'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import './StyleNavbar.css'
import FaceIcon from '@material-ui/icons/Face';
import { useSelector } from 'react-redux';
import { Chip, Hidden, IconButton } from '@material-ui/core';
import NavMenu from './NavMenu/NavMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './NavMenu/Logo';
import ResponsiveHeader from './ResponsiveNavbar/ResponsiveNavbar';

export default function Navbar() {

    const {isAuthenticated, currentUser} = useSelector(state =>state.user)
    const [displayNav, setDisplayNav] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()

    const handleClick = (e) => {
        if(isAuthenticated){
            setAnchorEl(e.currentTarget);
            setOpenMenu(true);

        }
      };
    useEffect(()=>{
        setDisplayNav(false)
    },[location.pathname])
    return (
        <> 
            {displayNav && <ResponsiveHeader />}
            <div className="navbar">
                <div className='link'>
                <Hidden lgUp>
                    <IconButton onClick={()=> setDisplayNav(!displayNav)}>  
                        <MenuIcon style={{color:'white'}} fontSize='large'/>
                    </IconButton>
                </Hidden>
                </div>
                <Hidden mdDown>
                    <div className='logo'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <div className='navbar__search'> 
                        <CustomInput Icon={SearchIcon}  placeholder='Search for products'/>
                    </div>
                </Hidden>
                <div className='links'>
                <Hidden mdDown>
                    <div className='link'>
                        <Link  to='/cart'>Cart</Link>
                        <ShoppingBasketIcon  />
                    </div>
                </Hidden>
                <div className='link' onClick={handleClick}>
                { isAuthenticated?
                    <Chip deleteIcon={<ArrowDropDownIcon />} label={currentUser?.name}  icon={<FaceIcon />} />
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <PersonIcon />
                    </>
                }
                <Hidden mdDown>
                    <NavMenu 
                    currentUser={currentUser}
                    isAuthenticated={isAuthenticated}
                    setAnchorEl={setAnchorEl} 
                    setOpenMenu={setOpenMenu}  
                    openMenu={openMenu} 
                    anchorEl={anchorEl} 
                    />
                </Hidden>
                </div>
            </div>
        </div>
        </>
    )
}
