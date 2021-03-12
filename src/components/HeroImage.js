import React from 'react';

const HeroImage = () => {
    return (
        <div className="hero-image" style={{ backgroundImage:`linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)),url(./assets/wallpaper-projects.jpg)`}}>
            <div className="hero-text">
                <h1 className="mb-4">Hola, soy Alexanyer Naranjo</h1>
                <p>Desarrollador Web Junior</p>
                <hr style={{backgroundColor:'#FFF'}}/> 
                <br />
                <p>
                    <i className="fab fa-html5 fa-3x"></i>
                    <i className="fab fa-css3-alt fa-3x"></i>
                    <i className="fab fa-js fa-3x"></i>
                    <i className="fab fa-react fa-3x"></i>
                    <i className="fab fa-wordpress fa-3x"></i>
                    <i className="fab fa-python fa-3x"></i>
                    <i className="fab fa-java fa-3x"></i>
                    <i className="fab fa-git-alt fa-3x"></i>
                </p>
            </div>
        </div>
    )
}

export default HeroImage;