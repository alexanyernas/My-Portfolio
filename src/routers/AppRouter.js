import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import HeroImage from '../components/HeroImage';
import AboutMe from '../components/AboutMe';
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

            <Switch>
                <Route path='./#aboutme' />
                <Route path='./#Skills' />
                <Route path='./#Projects' />
                <Route path='./#contact' />

                <Redirect to='./' />
            </Switch>
            
        </Router>
    )
}
