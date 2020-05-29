import React, { Component } from 'react';
import Home from './Home/Home'
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';

class Index extends Component {

    componentDidMount() {

        window.addEventListener('wheel', function (e) {
            if (e.deltaY > 0) {
                window.scrollTo({
                    top: window.pageYOffset + window.innerHeight, behavior: 'smooth'
                })
            } else {
                window.scrollTo({
                    top: window.pageYOffset - window.innerHeight, behavior: 'smooth'
                })
            };
        });
    }

    render() {
        return (
            <React.Fragment>
                <Home />
                <About />
                <Experience />
                <Skills />
                <Contacts />
            </React.Fragment>
        )
    }
}

export default Index;
