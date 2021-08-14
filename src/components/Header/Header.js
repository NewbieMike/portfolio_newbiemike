import React from 'react';
import './Header.scss';
import {Link as ScrollLink} from 'react-scroll';

const Header =() => {
    return (
        <header className='main_header'>
            <div className='header_logo'>
                <ScrollLink to="Home">
                    Just Mike
                    {/* <img src={logo} alt='logo'/> */}
                </ScrollLink>
            </div>
            <div className='header_links'>
                <ScrollLink activeClass="active" to="Home" spy={true} smooth={true}>Home</ScrollLink>
                <ScrollLink activeClass="active" to="Portfolio" spy={true} smooth={true}>Portfolio</ScrollLink>
                <ScrollLink activeClass="active" to="About" spy={true} smooth={true}>About</ScrollLink>
                <ScrollLink activeClass="active" to="Contact" spy={true} smooth={true}>Contact</ScrollLink>
            </div>
            <div className='header_phone'><a href="+48781254966">+48 781 254 966</a></div>
        </header>
    )
}

export default Header;