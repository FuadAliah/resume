import React, { Component } from 'react';
import CountUp from 'react-countup';

import './Loader.scss'


class Loader extends Component {

    state = {
        end: 0,
        hide: false
    }


    componentDidMount = () => {
        this.setState({
            end: 2020
        })

        setTimeout(() => {
            this.setState({ hide: true })
        }, 3000);
    }

    render() {
        return (
            <React.Fragment >
                <section className={this.state.end === 2020 ? 'loader hide' : ' loader show'} style={this.state.hide ? ({ display: 'none' }) : null}>
                    <CountUp
                        start={1990}
                        end={this.state.end}>
                        {({ countUpRef }) => (
                            <p className={this.state.end === 2020 ? 'number hidden' : 'number shown'} ref={countUpRef}></p>
                        )}
                    </CountUp>
                </section>
            </React.Fragment >
        );
    }
}

export default Loader;