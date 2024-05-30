import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiNodejs,
} from "react-icons/di";
import {
    SiDjango,
    SiLaravel,
    SiSymfony,
    SiReact,
    SiWordpress,
    SiWebflow,
    SiShopify, SiWagtail,
} from "react-icons/si";

function Framework() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiDjango/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWagtail/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaravel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSymfony/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiWordpress/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebflow/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiShopify/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
        </Row>
    );
}

export default Framework;
