import React from 'react';
import { Container } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
    return (
        <Container id="education" className="pt-5 text-white ">
            <div className="pt-2 pb-4">
                <h2 className="heading"> Education</h2>
            </div>
            <div className="d-flex">
                <div >
                    <FaGraduationCap className="h1" />
                </div>
                <div className="ps-4 d-flex flex-column align-items-start">
                    <h3>Khulna University of Engineering & Technology</h3>
                    <h4>Bachelor of Engineering</h4>
                    <h4>Electronics and Communication Engineering</h4>
                    <h4 className="text-warning">Apr 2015- July 2019</h4>
                </div>
            </div>
        </Container>
    );
};

export default Education;