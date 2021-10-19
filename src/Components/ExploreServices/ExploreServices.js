import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Service from '../Service/Service';
import './ExploreService.css'
const ExploreServices = () => {
    const services = useServices()
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner>
                <div style={{ zIndex: "1" }}>
                    <h2 style={{ color: "white" }}>Explore Services</h2>
                    <div className="text-center">
                        <NavLink to="/home" className="navlink">Home</NavLink>
                        <NavLink to="/contacts" className="navlink"> - Contacts</NavLink>
                    </div>
                </div>

            </Banner>
        
            <Container className="mt-5">

                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default ExploreServices;