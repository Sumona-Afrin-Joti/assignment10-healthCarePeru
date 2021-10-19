import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import WayToContacts from '../WayToContacts/WayToContacts';

const Contacts = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner>
                <div style={{ zIndex: "1" }}>
                    <h2 style={{ color: "white" }}>Contact Us</h2>
                    <div className="text-center">
                        <NavLink to="/home" className="navlink">Home</NavLink>
                        <NavLink to="/services" className="navlink"> - Services</NavLink>
                    </div>
                </div>
            </Banner>

            <Container className="my-5">

                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                    <WayToContacts></WayToContacts>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Contacts;