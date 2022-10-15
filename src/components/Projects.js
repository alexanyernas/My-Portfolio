import React from 'react';
import ModalProject from './ModalProject';
import ScrollReveal from './containers/ScrollReveal';
import { projects } from '../data/projects';
import { getAssetsProject } from '../helpers/getAssetsProject';

const Projects = () => {

    return (
        <div style={{ backgroundColor: '#4B3B5D'}} id="projects">
            <div className="container text-center py-5">
                <h2 className="text-light">My Projects</h2>
                <br />
                <div className="row mb-4">
                    {
                        projects.map(({name, tech, image, url, big}, index) => {
                            return (
                                <div className="text-center col-lg-4 col-md-12 col-sm-12 mb-3" key={index}>
                                    <ScrollReveal>
                                        <div className="card" style={{width:'320px'}}>
                                            <img src={getAssetsProject(image)} alt={name} height={160} />
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p style={{fontWeight: 300, fontSize: '14px'}}>{tech}</p>
                                                <div className='row justify-content-center'>
                                                    <div className='col-lg-6 col-sm-12 mb-2'>
                                                        <ModalProject index={index} big={big} />
                                                    </div>
                                                    {
                                                        url !== '#' &&
                                                            <div className='col-lg-6 col-sm-12 mb-2'>
                                                                <a href={url} target="_BLANK" rel="noreferrer" className="btn btn-outline-secondary">Visit Project</a>
                                                            </div>
                                                    }
                                                </div>
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