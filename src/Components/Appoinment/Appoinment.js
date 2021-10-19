import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Appoinment.css';
import img from '../../images/appointment-bg-1.png'

const Appoinment = () => {
    return (
        <div className="appoinment-field py-5 mt-5">
            <Container>
                <Row xs={1} md={2}>
                    <Col className="bg-white p-5">

                        <h6 className="text-center">Book An Appoinment</h6>
                        <Form className="mt-5">

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Your Name"
                                className="mb-3"
                            >
                                <Form.Control className="formControl" type="text" placeholder="Your Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Your Email"
                                className="mb-3"
                            >
                                <Form.Control className="formControl" type="email" placeholder="Your Email" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Subjects To Discuss"
                                className="mb-3"
                            >
                                <Form.Control className="formControl" type="text" placeholder="Subjects To Discuss" />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingDate"
                                label=""
                                className=" mb-3 "
                            >
                                <Form.Control className="formControl" type="date" placeholder="" />
                            </FloatingLabel>

                            <h5 className="text-center">Address Detailse</h5>

                            <Row className="my-3">
                                <Col xs={6}>
                                    <Form.Control className="py-2 formControl" placeholder="Your Address" />
                                </Col>
                                <Col>
                                    <Form.Control className="py-2 formControl" placeholder="City" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={6}>
                                    <Form.Control className="py-2 formControl" placeholder="State" />
                                </Col>
                                <Col>
                                    <Form.Control className="py-2 formControl" placeholder="Postal Code" />
                                </Col>
                            </Row>


                            <button className="button w-100" >Send Message</button>
                        </Form>
                    </Col>

                    <Col className="d-flex justify-content-center align-items-center" xs={{ order: 'first' }} md={{ order: 'last' }}>
                        <div>
                            <img width="100%" src={img} alt="" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Appoinment;