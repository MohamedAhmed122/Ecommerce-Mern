import { Menu, MenuItem } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../Redux/user/UserAction';

export default function NavMenu({anchorEl,setAnchorEl,setOpenMenu,isAuthenticated, openMenu,currentUser}) {

    const dispatch = useDispatch()
    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
      };
    const handleLogout =() =>{
        dispatch(userLogout())
        handleClose()
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
                    {/* <MenuItem style={{ width: 220  }}  onClick={handleClose}>
                        {isAuthenticated && currentUser.name}
                    </MenuItem> */}
                    <MenuItem style={{ width: 220  }}  onClick={handleClose}>
                        My account
                    </MenuItem>
                    <MenuItem    onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </Menu>
        </div>
    )
}
