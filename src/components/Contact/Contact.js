import React from 'react';
import './Contact.scss';
import localization from '../../media/map-marker-alt-solid.svg'
import mail from '../../media/paper-plane-solid.svg'
import mobile from '../../media/mobile-alt-solid.svg'
import instagram from '../../media/instagram-square-brands.svg'
import facebook from '../../media/facebook-square-brands.svg'
import linkedin from '../../media/linkedin-brands.svg'
import github from '../../media/github-square-brands.svg'
const Contact = () => {
    return(
        <section className='contact_section' id='Contact'>
            <h1 data-aos='fade-right'>Contact</h1>
            <div className='contact_content' data-aos='fade-left'>
                <h2>Contact data</h2>
                <h4>Localization</h4>
                <h6><img src={localization} alt='localization'/> Cracow, Poland</h6>
                <h4>Mail</h4>
                <h6><img src={mail} alt='mail'/> mmicherdakr@gmail.com</h6>
                <h4>Phone</h4>
                <h6><img src={mobile} alt='mobile'/> +48 781 254 966</h6>
                <h4>Social media</h4>
                <div className='social_media_icons'>
                    <a href='/'><img src={instagram} alt='instagram'/></a>
                    <a href='/'><img src={facebook} alt='facebook'/></a>
                    <a href='/'><img src={linkedin} alt='linkedin'/></a>
                    <a href='/'><img src={github} alt='github'/></a>
                </div>
            </div>
        </section>
    )
}

export default Contact;