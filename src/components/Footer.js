import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub, AiFillMail, AiFillPhone,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Réalisé avec 🫶 par Maxime Kets.</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Crédits : Soumyajit Behera</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/maximeKets"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/maxime-kets/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:maximekets80@gmail.com"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillMail/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="tel:0767882178"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillPhone/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
