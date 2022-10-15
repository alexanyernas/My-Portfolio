import React from 'react';
import ModalProject from './ModalProject';
import ScrollReveal from './containers/ScrollReveal';
import { projects } from '../data/projects';
const Projects = () => {

    return (
        <div style={{ backgroundColor: '#4B3B5D'}} id="projects">
            <div className="container text-center py-5">
                <h2 className="text-light">My Projects</h2>
                <br />
                <div className="row mb-4">
                    {
                        projects.map(({name, tech, image}, index) => {
                            return (
                                <div className="text-center col-lg-4 col-md-12 col-sm-12 mb-3" key={index}>
                                    <ScrollReveal>
                                        <div className="card" style={{width:'320px'}}>
                                            <img src={image} alt={name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p style={{fontWeight: 300, fontSize: '14px'}}>{tech}</p>
                                                <ModalProject index={index}/>
                                            </div>
                                        </div>
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

export default Projects;