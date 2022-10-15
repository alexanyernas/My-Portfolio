import React from 'react';

const AboutMe = () => {
    return (
        <div id="aboutme">
            <div className="container p-5 text-center text-light">
                <div className="row align-items-center mt-5 mb-5">
                
                    <div className="col-lg-6 col-sm-12">
                        <div className="container">
                            <img className="img" src="./assets/me.jpeg" alt="Alejandra Giannattasio" height="420" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 mt-3">
                        <div className="container">

                            <h3>A little about me</h3>
                            <hr style={{ backgroundColor:'#FFF' }}/>
                            
                            <p>
                                I am a 6th semester student of Computer Science at the Universidad Central de Venezuela. During my stay in the faculty I have had the opportunity to give classes to the students of the first semester of the career in Introduction to Computer Science.
                            </p>                    
                            <p>
                                In the work environment I work as a graphic designer, UI/UX designer and Frontend developer for more than two years.
                                I always seek to innovate with functional and simple designs that allow the user to interact optimally with the project to build, also taking into account the technologies and components used by the frontend team in order to facilitate their work by adapting the designs to the technologies that best suit them.
                            </p>
                            <p>
                            As a digital content designer for social networks, I seek to adapt the image of the company within the digital world.
                            </p>

                        </div>
                        
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default AboutMe;
