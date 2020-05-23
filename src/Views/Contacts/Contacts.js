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
                        <a href='#cs' className='linkedin' target='_blank'><TiSocialLinkedin /></a>
                        <a href='#cs' className='facebook' target='_blank'><TiSocialFacebook /></a>
                        <a href='#cs' className='github' target='_blank'><TiSocialGithub /></a>
                        <a href='#cs' className='instagram' target='_blank'><TiSocialInstagram /></a>
                        <a href='#cs' className='dropbox' target='_blank'><TiDropbox /></a>
                    </div>
                    <p>Made with <TiHeart /> By Fuad Aliah &copy; 2020</p>
                </div>
            </div>
        </section>
    );
}

export default Contacts;