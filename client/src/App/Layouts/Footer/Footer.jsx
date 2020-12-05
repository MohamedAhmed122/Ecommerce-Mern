import { Button, Hidden, IconButton } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Footer.css'
import Logo from '../Navbar/NavMenu/Logo';
export default function Footer() {
    return (
        <footer className='footer'> 
        <Hidden smDown>
        <div className='footer_left'>
                <div className='icon_footer'>
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                    <Button className='button_footer'>Home</Button>
                </div>
                <div className='icon_footer'>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <Button className='button_footer'>Service</Button>
                </div>
                <div className='icon_footer'>
                    <IconButton>
                        <InfoIcon />
                    </IconButton>
                    <Button className={'button_footer'}>
                        About US
                    </Button>
                </div>
            </div>
        </Hidden>
            

            <div className='footer_middle'>
                <div className='logo'>
                    <Logo  />
                </div>
               
                <Hidden xsDown>
                    <div className='icon_footer social_media'>
                        <IconButton>
                            <EmailIcon fontSize='large' />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon  fontSize='large'/>
                        </IconButton>
                    </div>
                </Hidden>
               
            </div>
            <Hidden smDown>
                <div className='footer_right'>
                <div className='icon_footer'>
                        <IconButton>
                            <ContactPhoneIcon />
                        </IconButton>
                        <Button className='button_footer'>Contact US</Button>
                    </div>
                    <p>Hello@hello.com</p>
                    <p>Hello@hello.com</p>
                </div>
            </Hidden>
            
        </footer>
    )
}
