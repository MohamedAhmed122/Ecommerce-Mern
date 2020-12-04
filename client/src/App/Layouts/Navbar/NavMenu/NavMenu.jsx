import { Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import {  useHistory } from 'react-router-dom';
import { userLogout } from '../../../Redux/user/UserAction';

export default function NavMenu({anchorEl,setAnchorEl,setOpenMenu, openMenu}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
      };
    const handleLogout =() =>{
        dispatch(userLogout())
        handleClose()
    }
    const handleAccount =()=>{
        history.push('/profile')
        handleClose();
    }

    return (
        <div className='nav_menu' style={{backgroundColor: 'black'}}>
            <Menu
                    id="simple-menu"
                    className='nav_menu_'
                    anchorEl={anchorEl}
                    onClick={handleClose}
                    keepMounted
                    open={openMenu}
                    onClose={handleClose}
                    style={{ zIndex: 1302, marginTop:50, marginLeft: 20 }}
                    onMouseLeave={handleClose}
                    MenuListProps={{
                        onMouseLeave: handleClose,
                        }}
                    
                >
                   
                    <MenuItem style={{ width: 220  }}  onClick={handleAccount}>
                        My account
                    </MenuItem>
                    <MenuItem    onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </Menu>
        </div>
    )
}
