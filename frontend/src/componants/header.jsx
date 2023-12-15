import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/Logo.png'
import './main.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={`header-container${menuOpen ? ' open' : ''}`}>
                <div className='header-inner'>
                    <div className='logo-container'>
                        <img src={logo} className='logo' />
                    </div>
                </div>
                <div className={`header-inner${menuOpen ? ' open' : ''}`}>
                    <div className='nav'>
                        <Link to='/#' className='navlink'>SERVICE</Link>
                        <Link to='/#' className='navlink'>CONTACT US</Link>
                        <Link to='/#' className='navlink'>ABOUT US</Link>
                        <Link to='/#' className='navlink'>CAREERS</Link>
                    </div>
                </div>

                <div className='menuToggle' onClick={handleMenuToggle}>
                    {menuOpen ? <CloseIcon style={{ fontSize: '30px' }} /> : <MenuIcon style={{ fontSize: '30px' }} />}
                </div>
            </div>
        </>
    )
}

export default Header