import React, { Component } from 'react';
import { TiDownloadOutline } from "react-icons/ti";
import Typical from "react-typical";

import './Hello.scss';

class Hello extends Component {
    render() {
        return (
            <div className='hello'>
                <p className='hi'>Hello, My name is</p>
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
                <a href='#cd' className='download'>
                    <TiDownloadOutline />
                    <span>Download CV</span>
                </a>
            </div>
        );
    }
}

export default Hello;