import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { id, img, service_name, description } = service;

    return (
        <Col className="card-col">
            <Card className="col-card h-100">

                <Card.Img variant="top" height="300px" className="img-fluid img" src={img} />


                <Card.Body>
                    <Card.Title className="title">
                        {service_name}
                    </Card.Title>
                    <Card.Text>
                        <small className="text"> {description}</small>
                    </Card.Text>

                    <NavLink to= {`/learnMore/${id}`}>

                        <Button className="button-bg">Learn More</Button>

                    </NavLink>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;