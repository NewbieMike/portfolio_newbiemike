import React from 'react';
import './Contact.scss';
import SocialIcon from '../SocialIcon/SocialIcon';
import Icon from '../Icon/Icon';
const Contact = () => {
    return(
        <section className='contact_section' id='Contact'>
            <h1 data-aos='fade-right'>Contact</h1>
            <div className='contact_content' data-aos='fade-left'>
                <h2>Contact data</h2>
                <h4>Localization</h4>
                <h6><Icon iconName='map-marker'/> Cracow, Poland</h6>
                <h4>Mail</h4>
                <h6><Icon iconName='paper-plane'/> mmicherdakr@gmail.com</h6>
                <h4>Phone</h4>
                <h6><Icon iconName='mobile'/> +48 781 254 966</h6>
                <h4>Social media</h4>
                <div className='social_media_icons'>
                    <a href=''><SocialIcon iconName='facebook'/></a>
                    <a href=''><SocialIcon iconName='linkedin'/></a>
                    <a href=''><SocialIcon iconName='instagram'/></a>
                </div>
            </div>
        </section>
    )
}

export default Contact;