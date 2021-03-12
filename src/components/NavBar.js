import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link 
                        to='/#aboutme'
                        className='nav-link'
                    >
                        Sobre mi
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to='/#skills'
                        className='nav-link'
                    >
                        Habilidades
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to='/#projects'
                        className='nav-link'
                    >
                        Proyectos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;