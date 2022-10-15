import React from 'react';
import ScrollReveal from './containers/ScrollReveal';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <div style={ { backgroundColor: '#FFF'} } id="skills">
            <div className="container p-5 text-center">
                <h2>My Skills</h2>
                <hr />
                <br />
                
                <div className="row mb-4">
                    {
                        skills.map(({src, alt}, index) => {
                            return (
                                <div className="col-lg-3 col-sm-12 mb-4" key={index}>
                                    <ScrollReveal>
                                        <img src={src} alt={alt} width="120" height="120" />
                                    </ScrollReveal>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;