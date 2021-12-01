import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div id="header">
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: '#000', fontSize: "20px", }}
                variant="dark"
                className="border-bottom py-2"
                fixed="top"
                id="nav"
            >
                <Container>
                    <Navbar.Brand
                        as={HashLink}
                        to="/#app"
                    >
                        Md Imran Hossain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/#projects">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/#skills">Skills</Nav.Link>
                            <Nav.Link as={HashLink} to="/#education">Education</Nav.Link>
                            <Nav.Link as={HashLink} to="/#contactForm">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            <Nav.Link target="_blank" href="https://drive.google.com/file/d/1x0r8YeI1cGs_7Gb_aG6KCGntuifxDB1A/view?usp=sharing">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;