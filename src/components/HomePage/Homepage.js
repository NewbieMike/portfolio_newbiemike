import React from 'react';
import Aos from 'aos';
import homepage_bg_video from '../../media/video.mp4';
import './Homepage.scss';
import { Link as ScrollLink } from 'react-scroll';
import Icon from '../Icon/Icon';

const Homepage = () => {
    Aos.init({duration: 1500});
    return (
        <section className='homepage_section' id='Home'>
            <video
                autoPlay
                loop
                muted
                className='homepage_bg_video'
                >
                <source src={homepage_bg_video} type='video/mp4' />
            </video>
            <h1 className='homepage_title' data-aos='fade-right'>Hello!<br/>I'm Mike.</h1>
            <div className='homepage_subtitle' data-aos='fade-left'>Let's create <br/>your website together!</div>
                <ScrollLink  className='btn_to_portfolio' activeClass="active" to="Portfolio" spy={true} smooth={true}>
                    See my work <Icon iconName='arrow-down'/>
                </ScrollLink>
            <div className='homepage_black_square'></div>
            <div className='scroll_icon'>Start scrolling</div>
            <div className='mouse_object'></div>
        </section>
    );
};

export default Homepage;