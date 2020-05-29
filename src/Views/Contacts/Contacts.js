import React from 'react';
import { TiHeart, TiLocationOutline, TiDevicePhone, TiMail, TiSocialLinkedin, TiSocialGithub, TiSocialFacebook, TiSocialInstagram, TiDropbox } from "react-icons/ti";


import './Contacts.scss';

const Contacts = () => {
    return (
        <section className='contacts' id='Contacts'>
            <div className='container'>
                <div className='data'>

                    <p>looking to use my skills and past experience within a suitably
                    challenging role in user experience and user interface building to
                    achieve the organization's objectives!
                    </p>
                    <ul className='contacts'>
                        <li><TiLocationOutline /><span>Amman - Jordan</span></li>
                        <li><TiDevicePhone /><span>+962 77 69 68 571</span></li>
                        <li><TiMail /><span><a href='mailto:eye.design17@yahoo.com'>eye.design17@yahoo.com</a></span></li>
                    </ul>

                </div>
            </div>

            <div className='footer'>
                <div className='contain'>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/fuadaliah' target="_blank" rel="noopener noreferrer" className='linkedin'><TiSocialLinkedin /></a>
                        <a href='https://facebook.com/fuad.aliah' target="_blank" rel="noopener noreferrer" className='facebook'><TiSocialFacebook /></a>
                        <a href='https://github.com/FuadAliah' target="_blank" rel="noopener noreferrer" className='github'><TiSocialGithub /></a>
                        <a href='https://www.instagram.com/fuadaliah/' target="_blank" rel="noopener noreferrer" className='instagram'><TiSocialInstagram /></a>
                        <a href='https://www.dropbox.com/sh/781fz87z6d6qbmi/AACLXqbH0yr7FtSvl6v-BPJKa?dl=0' target="_blank" rel="noopener noreferrer" className='dropbox'><TiDropbox /></a>
                    </div>
                    <p>Made with <TiHeart /> By Fuad Aliah &copy; 2020</p>
                </div>
            </div>
        </section>
    );
}

export default Contacts;