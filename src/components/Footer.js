import React from 'react';
import { footer_links } from '../data/footer_links';

const Footer = () => {
    return (
        <footer className="container p-5" id="contact">
            <div className="text-center text-light">
                <h3>alexanyernaranjo@gmail.com</h3>
                <hr />
                <p>
                    {
                        footer_links.map(({url, icon}, index) => {
                            return <a key={index} href={url} target="_BLANK" rel="noreferrer"><i className={icon}></i></a>
                        })
                    }
                </p>
            </div>
        </footer>
    )
}

export default Footer;