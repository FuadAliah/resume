import React from 'react';
import './Skill.scss';


const Skill = (props) => {
    const { skills } = props;
    const skillsList = skills.map(skill => {
        return (
            <React.Fragment key={skill.id}>
                <div className='skill'>
                    <p className='title'>{skill.title}</p>
                    <p className='text'>{skill.text}</p>
                </div>
            </React.Fragment>
        )
    })


    return (
        <React.Fragment>
            {skillsList}
        </React.Fragment>
    );
};

export default Skill;