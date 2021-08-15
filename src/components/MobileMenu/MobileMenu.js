import React, {useState} from 'react';
import './MobileMenu.scss';
import {Link as ScrollLink} from 'react-scroll';
const MobileMenu = () => {
    const [active, setActive] = useState(true);
    return (
        <div 
            className={active ? 'menu_button disactive' : 'menu_button active'}
            onClick={active ? () => setActive(!active) : ''}
        >
            <div className={active ? 'times active' : 'times '} onClick={() => setActive(!active)}>
                <div className='line line_one'></div>
                <div className='line line_three'></div>
            </div>
            <div className='line line_one'></div>
            <div className='line line_two'></div>
            <div className='line line_three'></div>
            <div className={active ? 'menu-content disactive' :'menu-content active'}>
                <h3 className='mobile_menu_title'>JustMike</h3>
                <ul className='menu_links'>
                    <li><ScrollLink activeClass="active" to="Home" spy={true} smooth={true} onClick={() => setActive(!active)}>Home</ScrollLink></li>
                    <li><ScrollLink activeClass="active" to="Portfolio" spy={true} smooth={true} onClick={() => setActive(!active)}>Portfolio</ScrollLink></li>
                    <li><ScrollLink activeClass="active" to="About" spy={true} smooth={true} onClick={() => setActive(!active)}>About</ScrollLink></li>
                    <li><ScrollLink activeClass="active" to="Contact" spy={true} smooth={true} onClick={() => setActive(!active)}>Contact</ScrollLink></li>
                </ul>
            </div>
        </div>
    )

};

export default MobileMenu;