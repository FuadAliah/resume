import React from 'react';
import { TiDownloadOutline } from "react-icons/ti";
import Typical from "react-typical";

import './Hello.scss';

const Hello = () => {
    return (
        <div className='hello'>
            <p className='hi'>Hello, I'm</p>
            <p className='name'>
                Fuad Aliah, and I'm a {' '}
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    className='anime'
                    steps={[
                        'SENIOR UI/UX DESIGNER', 700,
                        'FRONT-END DEVELOPER', 700,
                        'WEB DESIGNER', 700
                    ]}
                />
            </p>
            <p className='hi'>And I just might be available for your next project...</p>
            <a href='https://drive.google.com/file/d/1R-4d78mQ73JTYhX7CtPWwlrNReDWUeMp/view' target="_blank" rel="noopener noreferrer" className='download'>
                <TiDownloadOutline />
                <span>Download CV</span>
            </a>
        </div>
    );
}

export default Hello;