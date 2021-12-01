import React from 'react';
import { Col, Container, Row, Button, Nav } from 'react-bootstrap';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {

    return (
        <div className="bg-dark px-5 pt-5">
            
            <Container className="pt-5">
                <Row>
                    <Col xs={12} md={6}>
                        <div className="p-5 ps-0">
                            <img src="https://i.ibb.co/SK77zKj/IMG-0841-removebg-tiny-2.png" className="w-100 border border-warning border-5 rounded" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="ms-5">
                            <h2 className="text-light text-start heading">Hi, from Md Imran Hossain</h2>
                            <h4 className="text-light text-start mt-4 description">
                                A Full Stack web developer experienced in React, Node.js, Express.js, Mongodb and many more cool libraries
                            </h4>
                            <div className="mt-4 d-flex justify-content-start">
                                <Nav.Link
                                    className=" ps-0"
                                    href="https://www.linkedin.com/in/md-imran-hossain-237b29131/"
                                    target="_blank"
                                >

                                    <GrLinkedin className="text-white h1 "></GrLinkedin>
                                </Nav.Link>

                                <Nav.Link
                                    href="https://github.com/mdimran1409036"
                                    target="_blank"
                                >
                                    <FaGithub className="text-white h1"></FaGithub>
                                </Nav.Link>
                                <Nav.Link
                                    href="mailto:imran.kuet14@gmail.com"
                                    target="_blank"
                                >
                                    <SiGmail className="text-white h1"></SiGmail>
                                </Nav.Link>

                            </div>
                            <div className="mt-5 d-flex justify-content-start">
                                <Button className="btn-1 me-4  rounded border-0 text-light">
                                    <Nav.Link
                                        className="text-dark"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1x0r8YeI1cGs_7Gb_aG6KCGntuifxDB1A/view?usp=sharing">My Resume</Nav.Link>
                                </Button>
                                <Button className="btn-1  me-4  rounded border-0 text-light">
                                    <Nav.Link className="text-dark" as={HashLink} to="#contactForm">Contact Me</Nav.Link>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;