import React from 'react';
import Education from '../Education/Education';
import Banner from '../Banner/Banner'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Education></Education>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;