import React from 'react';
import Aos from 'aos';
import homepage_bg_video from '../../media/video.mp4';
import './Homepage.scss';

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
            <div className='homepage_black_square'></div>
            <div className='scroll_icon'>Start scrolling</div>
            <div className='mouse_object'></div>
        </section>
    );
};

export default Homepage;