import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../images/logo-white.png'

const Footer = () => {
    return (
        <div className=" footer mt-3 py-5">
            <div className=" container" >
                <Row>
                    <Col lg={3}>
                        <Stack gap={3}>
                            <img src={logo2} alt="" />
                            <p >As a rule, each therapy has indications and contraindications. There are many different types of therapy</p>

                            <Stack direction="horizontal" gap={2}>
                                <div className="facebook-icon">
                                    <FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon>
                                </div>

                                <div className="twitter-icon">
                                    <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
                                </div>
                                <div className="pinterest-icon">
                                    <FontAwesomeIcon icon={faPinterest} ></FontAwesomeIcon>
                                </div>


                            </Stack>
                        </Stack>
                    </Col>
                    <Col lg={3}>
                        <Stack gap={2}>
                            <h5>Explore</h5>
                            <ul className="text-secondary">
                                <li>Councelling</li>
                                <li> Our Courses</li>
                                <li>Career</li>
                                <li>Our Stories</li>
                            </ul>
                        </Stack>


                    </Col>

                    <Col lg={2}>
                        <Stack gap={2}>
                            <h5>Quick Links</h5>
                            <ul className="text-secondary">
                                <li>Home</li>
                                <li>Services</li>
                                <li>Appoinment</li>
                                <li>Contacts</li>

                            </ul>
                        </Stack>
                    </Col>
                    <Col lg={4}>
                        <h5>Get In Touch</h5>
                        <div className="w-75 position-relative border-0">
                            <input placeholder="your email address" className="form-control border-0" type="text" />
                            <button className="btn btn-primary position-absolute top-0 end-0 border-0"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                        </div>
                        <small className="mt-3 d-block">Subscribe Our Newsletter To Get Our Latest Updated News!</small>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;