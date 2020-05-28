import React, { Component } from 'react';
import BackgroundVideo from '../../Components/BackgroundVideo/BackgroundVideo';
import Hello from '../../Components/Hello/Hello';
import Srcolling from '../../Components/Srcolling/Srcolling';

class Home extends Component {

    render() {
        return (
            <section className='home' id='Home'>
                <BackgroundVideo />
                <Hello />
                <Srcolling />
            </section>
        );
    }
}

export default Home;