import React from 'react';
import './Footer.scss';
import {Link as ScrollLink} from 'react-scroll';
import logo from '../../media/logo.png';
import localization from '../../media/map-marker-alt-solid.svg';
import mail from '../../media/paper-plane-solid.svg';
import mobile from '../../media/mobile-alt-solid.svg';
import instagram from '../../media/instagram-square-brands.svg';
import facebook from '../../media/facebook-square-brands.svg';
import linkedin from '../../media/linkedin-brands.svg';
import github from '../../media/github-square-brands.svg';

const Footer = () => {
    return(
        <footer className='footer_content'>
            <div className='footer_column'>
                <h4 className='footer_title'>Navigation</h4>
                <ScrollLink to="Home" smooth={true}>Home</ScrollLink>
                <ScrollLink to="Portfolio" smooth={true}>Portfolio</ScrollLink>
                <ScrollLink to="About" smooth={true}>About</ScrollLink>
                <ScrollLink to="Contact" smooth={true}>Contact</ScrollLink>
                <a href='/'>Therms of policy</a>
            </div>
            <div className='footer_column'>
                <h4 className='footer_title'>Contact</h4>
                <a href="+48781254966">+48 781 254 966</a>
                <a href="/">mmicherdakr@gmail.com</a>
            </div>
            <div className='footer_column'>
                <h4 className='footer_title'>Social media</h4>
                <div className='footer_socialmedia'>
                    <a href='/'><img src={instagram} alt='instagram'/></a>
                    <a href='/'><img src={facebook} alt='facebook'/></a>
                    <a href='/'><img src={linkedin} alt='linkedin'/></a>
                    <a href='/'><img src={github} alt='github'/></a>
                </div>
                <ScrollLink to="Home" smooth={true}>
                    <img src={logo} alt='logo'/>
                </ScrollLink>
            </div>
        </footer>
    )
}

export default Footer;