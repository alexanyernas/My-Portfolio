import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {

    const links = [
        {
            to: '/#aboutme',
            text: 'About Me'
        },
        {
            to: '/#skills',
            text: 'Skills'
        },
        {
            to: '/#projects',
            text: 'Projects'
        },
        {
            to: '/#contact',
            text: 'Contact'
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav">
                {
                    links.map(({to, text}, index) => {
                        return (
                            <li className="nav-item" key={index} style={{fontSize: '18px'}}>
                                <Link 
                                    to={to}
                                    className='nav-link'
                                >
                                    {text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavBar;