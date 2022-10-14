import React from 'react';

const AboutMe = () => {
    return (
        <div id="aboutme">
            <div className="container p-5 text-center text-light">
                <div className="row align-items-center mt-5 mb-5">
                
                    <div className="col-lg-6 col-sm-12">
                        <div className="container">
                            <img className="img" src="./assets/me.jpg" alt="Alexanyer Naranjo" height="500" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 mt-3">
                        <div className="container">

                            <h3>A little about me</h3>
                            <hr style={{ backgroundColor:'#FFF' }}/>
                            
                            <p>
                                I am a student of Computer Science at the Universidad Central de Venezuela where I have had the opportunity to be a trainer in multiple subjects, such as Algorithms and Data Structures and Probability and Statistics.
                            </p>                    
                            <p>
                                I work as a Frontend Developer in the creation of web and mobile applications. Having experience in handling technologies such as: React.js, Vue.js, React Native, Ionic, and currently, learning about Dart and Flutter.                            
                            </p>
                            <p>
                            Finally, I have had the opportunity to form a community both on Twitter and YouTube that has +50K followers, where I am dedicated to the dissemination of resources, materials and tutorials about the world of programming.
                            </p>

                        </div>
                        
                    </div>
                </div>
            </div>

        
        </div>
    )
}

export default AboutMe;
