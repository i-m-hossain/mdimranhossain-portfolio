import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';
import { GoPrimitiveDot } from 'react-icons/go';
import { TiTick } from 'react-icons/ti';
import SliderLeft from './SliderLeft';


const ProjectDetails = () => {
    const { projectId } = useParams()
    const [projects] = useProjects()
    const project = projects.find(project => project.id == projectId)
    console.log(projects)
    return (
        <div className="mt-5 pt-5">
            <Container>
                <div className="mb-5">
                    <h2>{project?.title}</h2>
                </div>
                <Row>
                    <Col xs={12} md={8}>

                        <SliderLeft project={project}>
                        </SliderLeft>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="ps-4">
                            <h4 className="text-start fw-bold">Features</h4>
                            <hr className="w-50 mb-4" />
                            {
                                project?.description.map(item =>
                                    <div
                                        className="mb-2  d-flex align-items-start"
                                    >
                                        <GoPrimitiveDot className="me-4" />
                                        <p style={{ textAlign: "left" }}>
                                            {item}
                                        </p>

                                    </div>
                                )
                            }
                        </div>
                        <div className="ps-4">
                            <h4 className="text-start fw-bold ">Used Technology</h4>
                            <hr className="w-50 mb-4" />
                            <div className="d-flex flex-wrap mb-4 ">
                                {
                                    project?.tech?.map(item => <p className="text-light span  mb-3 pe-2 "><TiTick className="h4 me-2" />{item}</p>)
                                }
                            </div>

                        </div>
                        <div className="ps-4">

                            {
                                project?.links?.map(item => <a className="btn btn-warning me-3 mb-3 fw-bold" href={item.url}>{item.link}</a>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default ProjectDetails;