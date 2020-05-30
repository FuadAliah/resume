import React from 'react';
import { TiSocialLinkedin, TiSocialGithub, TiSocialFacebook, TiSocialInstagram, TiDropbox } from "react-icons/ti";

import './About.scss';

const About = () => {

    return (
        <section className='about' id='About'>
            <div className='container'>

                <div className='data'>
                    <p className='aboutMe'>I’m a <span className='bold'>self-motivated</span> and experienced in <span className='bold'>UX/UI Designing </span>
                & <span className='bold'>Front-End developer</span> I have several years of experience, I’m a fast learner Proven skills through working well within a close
                team whilst using initiative for problem solving and ensuring errors are corrected I’m always
                Looking for an opportunity to join an Established professional team which can help me further
                develop my skills and enable me!
                </p>

                    <div className='personalInfo'>
                        <div className='info'>
                            <p className='key'>Date of Birth</p>
                            <p className='value'>kuwait, 15 July 1990</p>
                        </div>
                        <div className='info'>
                            <p className='key'>Marital Status</p>
                            <p className='value'>Single</p>
                        </div>
                        <div className='info'>
                            <p className='key'>Nationality</p>
                            <p className='value'>Jordanian</p>
                        </div>
                    </div>

                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/fuadaliah' target="_blank" rel="noopener noreferrer" className='linkedin'><TiSocialLinkedin /></a>
                        <a href='https://facebook.com/fuad.aliah' target="_blank" rel="noopener noreferrer" className='facebook'><TiSocialFacebook /></a>
                        <a href='https://github.com/FuadAliah' target="_blank" rel="noopener noreferrer" className='github'><TiSocialGithub /></a>
                        <a href='https://www.instagram.com/fuadaliah/' target="_blank" rel="noopener noreferrer" className='instagram'><TiSocialInstagram /></a>
                        <a href='https://www.dropbox.com/sh/781fz87z6d6qbmi/AACLXqbH0yr7FtSvl6v-BPJKa?dl=0' target="_blank" rel="noopener noreferrer" className='dropbox'><TiDropbox /></a>
                    </div>
                </div>

            </div>
        </section>
    );

}

export default About;