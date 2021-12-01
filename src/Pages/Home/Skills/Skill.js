import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Skill = ({ title, language }) => {
    return (
        <Row className="text-light mb-5 d-flex align-items-center">
            <Col xs={12} md={2}>
                <h2 className="text-start">{title}</h2>
            </Col>
            <Col xs={12} md={10} className="d-flex align-items-center flex-wrap ps-4">
                {
                    language.map((item, index) => {
                        return (
                            <div className="d-flex flex-column ms-4 me-5 mb-3" key={index}>
                                <img src={item.img} width="60" alt={item.name} />
                                <h4 className="pt-3">{item.name}</h4>
                            </div>
                        )
                    })
                }
            </Col>
        </Row>
    );
};

export default Skill;