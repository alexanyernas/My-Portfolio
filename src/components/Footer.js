import React from 'react';

const Footer = () => {
    return (
        <footer className="container-fluid p-5">
            <div className="text-center text-light">
                <h2>Just Smile ☕</h2>
                <hr />
                <br />
                <p>
                    <a href="https://github.com/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-github fa-2x mr-4"></i></a>
                    <a href="https://linkedin.com/in/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-linkedin fa-2x mr-4"></i></a>
                    <a href="https://twitter.com/alexanyernas/" target="_BLANK" rel="noreferrer"><i className="fab fa-twitter fa-2x mr-4"></i></a>
                    <a href="https://instagram.com/alexanyernas" target="_BLANK" rel="noreferrer"><i className="fab fa-instagram fa-2x mr-4"></i></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
