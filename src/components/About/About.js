import React, {useState} from 'react';
import './About.scss';
import job from '../../media/job.jpg';
import hobbies from '../../media/hobbies.jpg';
import programming from '../../media/programming.jpg';
import Aos from 'aos';
const About = () => {
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(true);
    const [active3, setActive3] = useState(true);
    Aos.init({duration: 1500});
    return (
        <section className='section_about' id='About'>
            <h1 data-aos='fade-right'>About me</h1>
            <div className='about_contener'>
                <div className={active1 ? 'box first_box' : 'disabled' } onClick={() => setActive1(!active1)}>
                    <div className='about_box_title'>Design <br/> and<br/> programming</div>
                    <img src={programming} alt='job' className={active1 ? 'about_img' : 'img_disable'} data-aos='fade-up'/>
                    <div className={active1 ? 'notVisable_content' : 'visable_content' }>
                        <h3>Design and programming</h3>
                        <div className='skill-description'>In sed feugiat ante. Quisque vulputate aliquam libero ac auctor. Praesent ut sapien laoreet, dapibus sapien vel, sollicitudin orci. Fusce vehicula odio velit, non pulvinar justo scelerisque vel. Proin auctor neque sem, eget dictum lectus interdum congue. Maecenas sem erat, feugiat id imperdiet id, ullamcorper in mauris. Donec interdum viverra dolor sit amet luctus. Cras nibh felis, eleifend ut sem aliquet, mattis ultricies tellus. Phasellus eget tempus velit, sed pellentesque eros. Praesent non arcu non ante aliquet ullamcorper. Curabitur tristique, purus vel sodales condimentum, mi purus congue massa, sed congue ex massa sed est. Sed ac tempor ante, tristique malesuada augue. Nullam massa libero, euismod sed blandit quis, laoreet non dui. Etiam odio nisl, mollis et enim vel, auctor sollicitudin lectus.</div>
                        <div className='close' onClick={() => setActive3(!active1)}>X</div>
                    </div>
                </div>
                <div className='stripe'></div>
                <div className={active2 ? 'box second_box' : 'disabled'} onClick={() => setActive2(!active2)}>
                    <div className='about_box_title'>Hobbies</div>
                    <img src={hobbies} alt='job' className={active2 ? 'about_img' : 'img_disable'} data-aos='fade-down'/>
                    <div className={active2 ? 'notVisable_content' : 'visable_content' }>
                        <h3>Hobbies</h3>
                        <div className='skill-description'>In sed feugiat ante. Quisque vulputate aliquam libero ac auctor. Praesent ut sapien laoreet, dapibus sapien vel, sollicitudin orci. Fusce vehicula odio velit, non pulvinar justo scelerisque vel. Proin auctor neque sem, eget dictum lectus interdum congue. Maecenas sem erat, feugiat id imperdiet id, ullamcorper in mauris. Donec interdum viverra dolor sit amet luctus. Cras nibh felis, eleifend ut sem aliquet, mattis ultricies tellus. Phasellus eget tempus velit, sed pellentesque eros. Praesent non arcu non ante aliquet ullamcorper. Curabitur tristique, purus vel sodales condimentum, mi purus congue massa, sed congue ex massa sed est. Sed ac tempor ante, tristique malesuada augue. Nullam massa libero, euismod sed blandit quis, laoreet non dui. Etiam odio nisl, mollis et enim vel, auctor sollicitudin lectus.</div>
                        <div className='close' onClick={() => setActive3(!active2)}>X</div>
                    </div>
                </div>
                <div className='stripe_white'></div>
                <div className={active3 ? 'box third_box' : 'disabled'} onClick={() => setActive3(!active3)}>
                    <div className='about_box_title'>Job experiance <br/>and<br/> courses</div>
                    <img src={job} alt='job' className={active3 ? 'about_img' : 'img_disable'} data-aos='fade-up'/>
                    <div className={active3 ? 'notVisable_content' : 'visable_content' }>
                        <h3>Job experiance and courses</h3>
                        <div className='skill-description'>In sed feugiat ante. Quisque vulputate aliquam libero ac auctor. Praesent ut sapien laoreet, dapibus sapien vel, sollicitudin orci. Fusce vehicula odio velit, non pulvinar justo scelerisque vel. Proin auctor neque sem, eget dictum lectus interdum congue. Maecenas sem erat, feugiat id imperdiet id, ullamcorper in mauris. Donec interdum viverra dolor sit amet luctus. Cras nibh felis, eleifend ut sem aliquet, mattis ultricies tellus. Phasellus eget tempus velit, sed pellentesque eros. Praesent non arcu non ante aliquet ullamcorper. Curabitur tristique, purus vel sodales condimentum, mi purus congue massa, sed congue ex massa sed est. Sed ac tempor ante, tristique malesuada augue. Nullam massa libero, euismod sed blandit quis, laoreet non dui. Etiam odio nisl, mollis et enim vel, auctor sollicitudin lectus.</div>
                        <div className='close' onClick={() => setActive3(!active3)}>X</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;