import React, { Component } from 'react';
import Work from '../../Components/Work/Work';

import './Experience.scss';

class Experience extends Component {

    state = {
        items: [
            {
                id: 1, company: 'iHorizons', date: 'SEP. 2019 - present', position: 'UX/UI DESIGNER & FRONT-END DEVELOPER',
                info: [
                    { id: 1, text: 'Take a user-centered design approach and rapidly test and iterate your designs.' },
                    { id: 2, text: 'Turning mockups into HTML5, SASS & JQuery.' },
                    { id: 3, text: 'Maintaining and developing Frontend reusable components.' },
                    { id: 4, text: 'Fixing issues on the existing framework.' },
                    { id: 5, text: 'Conducting design & code reviews.' }
                ]
            },
            {
                id: 2, company: 'JazzHR', date: 'DES. 2017 - SEP. 2019', position: 'UX/UI DESIGNER - FREELANCER',
                info: [
                    { id: 1, text: 'Translate concepts into wireframes and mockups that lead to intuitive user experiences.' },
                    { id: 2, text: 'Facilitate product visions by researching, conceiving, wireframing, sketching, prototyping, and mocking up user experiences for digital products.' },
                    { id: 3, text: 'Design and deliver wireframes, user stories, and mockups optimized for a wide range of devices and interfaces.' },
                ]
            },
            {
                id: 3, company: 'Bayt.com', date: 'SEP. 2016 - SEP. 2017', position: 'SENIOR UX/UI DESIGNER',
                info: [
                    { id: 1, text: 'Created the base framework and designed the entire UI foundation for web Typography, buttons, cards, Icons etc.' },
                    { id: 3, text: 'Pioneered the use of “Invision” collaboration tool between designers and developers to Generate style guides and resources, automatically. Cutting meeting times in half.' },
                    { id: 4, text: 'Injected user-experience design into dozens of Web and mobile properties for the Learning portal increasing after job search engagement.' }
                ]
            },
            {
                id: 4, company: 'iHorizons', date: 'MAY. 2014 - AUG. 2016', position: 'SENIOR UX/UI & WEB DESIGNER',
                info: [
                    { id: 1, text: 'Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas.' },
                    { id: 2, text: 'Present and defend designs and key milestone deliverable to peers and executive level stakeholders Conduct user research and evaluate user feedback.' },
                    { id: 3, text: 'Establish and promote design guidelines, best practices and standards.' },
                ]
            },
            {
                id: 5, company: 'Smarteletec', date: 'SEP. 2009 - APR. 2014', position: 'UX/UI DESIGNER',
                info: [
                    { id: 1, text: 'Create and improve Smarteletec Telecommunication products Provider portals and mobile apps on native mobile and web applications.' },
                    { id: 2, text: 'leading the web, mobile and devices user interface and user experience design.' },
                    { id: 3, text: 'Transform idea into real and highly interactive mobile applications by delivering simpler and effective user experience to the end consumers of the app.' },
                ]
            }

        ]
    }


    render() {
        return (
            <section className='experience' id='Experience'>
                <div className='container'>
                    <div className='data'>
                        <div className='works'>
                            <Work items={this.state.items} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;