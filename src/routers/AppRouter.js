import React from 'react';
import NavBar from '../components/NavBar';
import HeroImage from '../components/HeroImage';
import AboutMe from '../components/AboutMe';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export const AppRouter = () => {
    return (
        <Router>
            
            <NavBar />
            <HeroImage />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />

            <div>
                <Switch>
                    <Route path='./#aboutme' />
                    <Route path='./#Skills' />
                    <Route path='./#Projects' />

                    <Redirect to='./' />
                </Switch>
            </div>
            
        </Router>
    )
}
