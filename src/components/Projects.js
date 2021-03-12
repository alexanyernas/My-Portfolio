import React from 'react';

const Projects = () => {
    return (
        <div style={{ backgroundAttachment:'fixed', backgroundImage:`linear-gradient(rgb(0,0,0,0.9),rgb(0,0,0,0.9)), url('./assets/wallpaper-projects.jpg')` }} id="projects">
            <div className="container text-center p-5">
                <h2 className="text-light">Mis proyectos</h2>
                <hr style={{backgroundColor:'#FFF'}} />
                <br />
                <div className="row">
                    
                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}}>
                            <img src="./assets/projects/Todo-App.png" alt="Calculator-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    To-Do App
                                </h5>
                                <p className="card-text">Desarollo de lista de tareas con React.js y Bootstrap.</p>
                                <a href="https://alexanyernas.github.io/Todo-App/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}}>
                            <img src="./assets/projects/Calculator-PayPal.png" alt="Todo-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Calculator PayPal
                                </h5>
                                <p className="card-text">Calculadora de comisiones para transacciones PayPal.</p>
                                <a href="https://alexanyernas.github.io/Calculator-PayPal/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}}>
                            <img src="./assets/projects/Calculator-App.png" alt="Calculator-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Calculator App
                                </h5>
                                <p className="card-text">Calculadora sencilla para calculos matemáticos.</p>
                                <a href="https://alexanyernas.github.io/Calculator-App/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className="row">
                    
                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}}>
                            <img src="./assets/projects/Pokedex-App.png" alt="Calculator-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Pokédex App
                                </h5>
                                <p className="card-text">Utilización de PokeApi para desarrollo de Pokédex.</p>
                                <a href="https://alexanyernas.github.io/Pokedex-App/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}}>
                            <img src="./assets/projects/Educa2.png" alt="Calculator-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Educa2
                                </h5>
                                <p className="card-text">Sitio Web realizado con el CMS WordPress para Educa2.</p>
                                <a href="https://educa2.net/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card" style={{width:'18rem'}} >
                            <img src="./assets/projects/Todo-Majoni-III.png" alt="Calculator-App" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Todo Majoni III
                                </h5>
                                <p className="card-text">Sitio Web realizado con el CMS WordPress para Todo Majoni III.</p>
                                <a href="https://todomajoni3.com/" target="_BLANK" rel="noreferrer" className="btn btn-outline-primary">Visitar sitio web</a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Projects;