import React, { Component } from 'react';
import { TiArrowUpOutline } from "react-icons/ti";

import './Top.scss';

class Top extends Component {

    state = {
        Scrolled: false,
    }

    ToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const Position = window.scrollY > 900
            if (Position !== true) {
                this.setState({
                    Scrolled: false
                })
            } else {
                this.setState({
                    Scrolled: true
                })
            }
        })
    }


    render() {
        return (
            <div className={this.state.Scrolled ? 'top display' : 'top'}>
                <span onClick={this.ToTop}>
                    <TiArrowUpOutline />
                </span>
            </div>
        );
    }
}

export default Top;