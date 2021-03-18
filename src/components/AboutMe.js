import React from 'react';

const AboutMe = () => {
    return (
        <div className="container text-center text-light" id="aboutme">

            <div className="row mt-5 mb-5 no-gutters">
            
                <div className="col">
                    <div className="container">
                        <img className="img" src="./assets/me.jpg" alt="Alexanyer Naranjo" height="500" />
                    </div>
                </div>

                <div className="col mt-3">
                    <div className="container">

                        <h2>Un poco sobre mí...</h2>
                        <hr style={{ backgroundColor:'#FFF' }}/>
                        
                        <p>
                            Soy estudiante de Ciencias de la Computación en la Universidad Central de Venezuela donde he tenido la oportunidad
                            de ser preparador en múltiples materias, tales como Algoritmos y Estructuras de Datos, y actualmente me encuentro
                            enseñando Probabilidad y Estadística a los chicos más avanzados de la carrera.
                        </p>                    
                        <p>
                            Trabajo como Desarrollador Frontend utilizando la librería de React.js, destacando mi experiencia en el manejo de otras tecnologías tales como C/C++, Java, Python, Git y WordPress.
                        </p>
                        <p>
                            Tengo una gran pasión por el aprendizaje y por ello, desde el 2019 junto con Alejandra Giannattasio, fundamos Educa2.       
                            Un proyecto destinado a enseñar a través de clases y cursos la importancia de la programación en la vida diaria de cada persona.
                        </p>
                        <hr style={{ backgroundColor:'#FFF' }}/>
                        <p>
                            <a href="https://github.com/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-github fa-2x mr-4"></i></a>
                            <a href="https://linkedin.com/in/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-linkedin fa-2x mr-4"></i></a>
                            <a href="https://twitter.com/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-twitter fa-2x mr-4"></i></a>
                            <a href="https://instagram.com/alexanyernas" target="_BLANK" rel="noreferrer"><i className="fab fa-instagram fa-2x mr-4"></i></a>
                        </p>

                    
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default AboutMe;
