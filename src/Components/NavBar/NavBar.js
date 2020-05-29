import React, { Component } from 'react';
import { Link } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../../logo.svg';

import './NavBar.scss';

class NavBar extends Component {

    state = {
        isOpened: false,
        position: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const Position = window.scrollY > window.innerHeight
            if (Position !== true) {
                this.setState({
                    position: false
                })
            } else {
                this.setState({
                    position: true
                })
            }
        })
    }

    handleClick = () => {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        return (
            <nav className={this.state.position ? 'add' : null}>
                <div className='Flex'>
                    <Link to="Home" hashSpy={true} spy={true} smooth={true} duration={1500} offset={0}><img src={Logo} alt='Logo' /></Link>
                    <div onClick={this.handleClick} className='iconMenu'>
                        <span className={!this.state.isOpened ? 'fadeOut' : 'fadeIn top'}></span>
                        <span className={!this.state.isOpened ? 'left' : 'leftRotate'}></span>
                        <span className={!this.state.isOpened ? 'right' : 'rightRotate'}></span>
                        <span className={!this.state.isOpened ? 'fadeOut' : 'fadeIn down'}></span>
                        <div></div>
                    </div>
                </div>
                <AnimatePresence>
                    {this.state.isOpened &&
                        <motion.div
                            initial={{ y: '-100vh' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100vh' }}
                            style={{ overflow: 'hidden' }}
                            transition={{ ease: "easeInOut", duration: 1 }}
                            className='navBar'>
                            <div className='links'>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70px' }}
                                    exit={{ height: 0 }}
                                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
                                    transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                                    <Link activeClass="active" data-text='Home' onClick={this.handleClick} hashSpy={true} spy={true} smooth={true} delay={1000} offset={0} duration={1500} to="Home">Home</Link>
                                </motion.div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70px' }}
                                    exit={{ height: 0 }}
                                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
                                    transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                                    <Link activeClass="active" data-text='ABOUT' onClick={this.handleClick} hashSpy={true} spy={true} smooth={true} delay={1000} offset={0} duration={1500} to="About">About</Link>
                                </motion.div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70px' }}
                                    exit={{ height: 0 }}
                                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
                                    transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                                    <Link activeClass="active" data-text='Experience' onClick={this.handleClick} hashSpy={true} spy={true} smooth={true} delay={1000} offset={0} duration={1500} to="Experience">Experience</Link>
                                </motion.div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70px' }}
                                    exit={{ height: 0 }}
                                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
                                    transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                                    <Link activeClass="active" data-text='Skills' onClick={this.handleClick} hashSpy={true} spy={true} smooth={true} delay={1000} offset={0} duration={1500} to="Skills">Skills</Link>
                                </motion.div>
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '70px' }}
                                    exit={{ height: 0 }}
                                    style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
                                    transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }}>
                                    <Link activeClass="active" data-text='Contacts' onClick={this.handleClick} hashSpy={true} spy={true} smooth={true} delay={1000} offset={0} duration={1500} to="Contacts">Contacts</Link>
                                </motion.div>

                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </nav >
        );
    }
};

export default NavBar;