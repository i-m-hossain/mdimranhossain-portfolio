import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProjects from '../../../hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects()
    return (
        <div id='projects' className="pt-5">
            <div className="pt-2 pb-4">
                <h2 className="heading text-light">
                    Projects
                </h2>
            </div>
            <Container className="mt-5">
                <Row>
                    {
                        projects.map(project => <Project
                            projectId={project.id}
                            title={project.title}
                            details={project.details}
                            tech={project.tech}
                            links={project.links}
                            credentials={project.credentials}
                            images={project.images}
                            key={project.id}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;