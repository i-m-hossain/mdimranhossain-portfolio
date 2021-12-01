import React from 'react';
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import './AboutMe.css'
const AboutMe = () => {


    return (
        <div className="p-5 m-5 text-light">
            <h2 className="pt-3">Hello, I am Md Imran Hossain</h2>
            <p className="text-start article mt-4" >
                I am a javascript enthusiast and hard working individual, skilled in frontend technology. I believe every day is a new opportunity to build the path to be more professional and more developed. I think the best way to learn new things is doing some research the technology and do some projects.
            </p>
            <p className="text-start article mt-4">
                I already did some <a className="text-warning" href="https://github.com/mdimran1409036" target="_blank" rel="noreferrer">projects</a>  in React, Node.js, Express.js and MongoDB along with some css framework i.e. bootstrap, Material UI and  Tailwind CSS and looking forward to do more.
            </p>

            <p className="text-start article mt-4">
                I have completed my graduation in Electronics and Communication Engineering from <a className="text-warning" href="https://www.kuet.ac.bd" target="_blank" rel="noreferrer" >Khulna university of Engineering and technology</a>  and thriving for a career opportunity in Full Stack Web Development.
            </p>

            <div className="d-flex align-items-center text-start article mt-4">
                <h4 className="me-4">Find me</h4>
                <a
                    href="https://www.linkedin.com/in/imran-kuet14"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light"
                >
                    <AiFillLinkedin className="h1" />
                </a>
                <a
                    href="https://github.com/mdimran1409036"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light"
                >
                    <AiFillGithub className="h1" />
                </a>
                <a
                    href="https://www.facebook.com/r.rudronil"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light"
                >
                    <AiFillFacebook className="h1" /></a>


            </div>
        </div>
    );
};

export default AboutMe;