import { Menu, MenuItem } from '@material-ui/core'
import React from 'react'

export default function NavMenu({anchorEl,setAnchorEl,setOpenMenu, openMenu,currentUser}) {

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
      };
    return (
        <div className='nav_menu'>
            <Menu
                    id="simple-menu"
                    className='nav_menu_'
                    anchorEl={anchorEl}
                    onClick={handleClose}
                    keepMounted
                    open={openMenu}
                    onClose={handleClose}
                    style={{ zIndex: 1302, marginTop:10, marginLeft: 0 }}
                    onMouseLeave={handleClose}
                    MenuListProps={{
                        onMouseLeave: handleClose,
                        }}
                    
                >
                    <MenuItem style={{ width: 220  }}  onClick={handleClose}>
                        {currentUser.name}
                    </MenuItem>
                    <MenuItem  onClick={handleClose}>
                        My account
                    </MenuItem>
                    <MenuItem    onClick={handleClose}>
                        Logout
                    </MenuItem>
                </Menu>
        </div>
    )
}
