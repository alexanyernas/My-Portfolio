import React from 'react';

const Skills = () => {
    return (

        <div style={ { backgroundColor: '#FFF'} } id="skills">
            <div className="container p-5 text-center">
                <h2>Mis habilidades</h2>
                <hr />
                <br />
                
                <div className="row mb-4">
                    <div className="col mb-3">
                        <img src="./assets/skills/html.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Avanzado)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/css.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Avanzado)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/javascript.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Avanzado)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/react.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Básico)</small></p>
                    </div>

                    <div className="col mb-3">
                        <img src="./assets/skills/wordpress.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Intermedio)</small></p>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col mb-3">
                        <img src="./assets/skills/c.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Intermedio)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/cpp.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Intermedio)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/python.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Intermedio)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/java.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Intermedio)</small></p>
                    </div>
                    
                    <div className="col mb-3">
                        <img src="./assets/skills/git.svg" alt="HTML" width="120" height="120" />
                        <p className="mt-2 text-muted"><small>(Avanzado)</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;