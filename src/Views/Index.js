import React from 'react';
import Home from './Home/Home'
import About from './About/About';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Contacts from './Contacts/Contacts';
import Top from '../Components/Top/Top';
import Loader from '../Views/Loader/Loader';

function App() {
    return (

        <React.Fragment>
            <Loader />
            <Home />
            <About />
            <Experience />
            <Skills />
            <Contacts />
            <Top />
        </React.Fragment>

    )
}

export default App;
