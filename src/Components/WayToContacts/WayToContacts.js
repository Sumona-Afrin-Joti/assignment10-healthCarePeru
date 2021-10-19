import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import phone from '../../images/phone-call.png';
import email from '../../images/email.png';
import location from '../../images/pin.png';
import './WaytoContacts.css'
const WayToContacts = () => {
    const waytoContacts = [
        {
            img: email,
            name: "Email",
            description: "We will be happy to assist you.Please call us, we will work with you, not for you.",
            contact: "(880)-987-123-4563"
        },
        {
            img: phone,
            name: "Phone",
            description: "We will be happy to assist you.Please call us, we will work with you, not for you.",
            contact: "info@perhu.com"
        },
        {
            img: location,
            name: "Address",
            description: "We will be happy to assist you.Please call us, we will work with you, not for you.",
            contact: "View On Google map"
        }
    ]
    return (
        <>
            {
                waytoContacts.map(way =>

                    <Col className="contact-way-col">

                        <Card >
                            <div className="img-div mt-3 ms-3">
                                <Card.Img variant="top" className="img-fluid image" src={way.img} />
                            </div>

                            <Card.Body>
                                <Card.Title>
                                   {way.name}
                                </Card.Title>
                                <Card.Text className="card-text">
                                    {way.description}
                                    <small>{way.contact}</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)

            }

        </>

    );
};

export default WayToContacts;