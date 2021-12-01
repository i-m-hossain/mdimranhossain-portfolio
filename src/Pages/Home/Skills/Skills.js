import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skill from './Skill';
import react from '../../../skills/react.png'
import js from '../../../skills/javascript.png'
import bootstrap from '../../../skills/bootstrap.png'
import html5 from '../../../skills/html.png'
import css from '../../../skills/css.png'
import node from '../../../skills/nodejs.png'
import express from '../../../skills/express-js.png'
import mongodb from '../../../skills/mongo.png'
import mysql from '../../../skills/mysql.png'
import php from '../../../skills/php.png'
import laravel from '../../../skills/laravel.png'
import tailwind from '../../../skills/tailwind.svg'
import material from '../../../skills/material ui.png'
import github from '../../../skills/github.png'
import vscode from '../../../skills/vscode.png'
import heroku from '../../../skills/heroku.png'
import firebase from '../../../skills/firebase.png'
import netlify from '../../../skills/netlify.png'



const Skills = () => {
    return (
        <Container id="skills" className="pt-5">
            <div className="pt-2 pb-4">
                <h2 className="text-white heading">Skills</h2>
            </div>
            <Row>
                <Col xs={12} >
                    <Skill

                        title="Frontend"
                        language={
                            [
                                { name: 'JS', img: js },
                                { name: 'React', img: react },
                                { name: 'Bootstrap', img: bootstrap },
                                { name: 'HTML5', img: html5 },
                                { name: 'CSS', img: css }
                            ]
                        }
                    />

                    <Skill
                        title="Backend"
                        language={
                            [
                                { name: 'Node.js', img: node },
                                { name: 'Express.js', img: express },
                            ]
                        }
                    />
                    <Skill
                        title="Database"
                        language={
                            [
                                { name: 'Mongodb', img: mongodb },
                                { name: 'Mysql', img: mysql },
                            ]
                        }
                    />
                    <Skill
                        title="Tools"
                        language={
                            [
                                { name: 'Github', img: github },
                                { name: 'VS code', img: vscode },
                                { name: 'Heroku', img: heroku },
                                { name: 'Netlify', img: netlify },
                                { name: 'Firebase', img: firebase }
                            ]
                        }
                    />
                    <Skill
                        title="Comfortable"
                        language={
                            [
                                { name: 'PHP', img: php },
                                { name: 'Laravel', img: laravel },
                                { name: 'Tailwind CSS', img: tailwind },
                                { name: 'Material UI', img: material }
                            ]
                        }
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;