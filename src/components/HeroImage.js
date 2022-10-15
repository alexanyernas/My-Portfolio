import React from 'react';
import { icons } from '../data/icons';

const HeroImage = () => {
    return (
        <div className="hero-image" style={{ backgroundImage:`linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.8)), url(./assets/heroImage.jpg)`}}>
            <div className="hero-text">
                <h1 className="mb-4">Hi, I'm Alejandra Giannattasio!</h1>
                <p>Graphic Designer - UI/UX</p>
                <hr style={{backgroundColor:'#FFF'}}/> 
                <br />
                <p>
                    {
                        icons.map((item, index) => { return <i key={index} className={item}></i> })
                    }
                </p>
            </div>
        </div>
    )
}

export default HeroImage;