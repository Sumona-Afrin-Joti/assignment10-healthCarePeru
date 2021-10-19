import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useServices from '../../hooks/useServices/useServices';
import Service from '../Service/Service';

const HomeSectionServices = () => {
    const services = useServices()
    return (
        <div className=" bg-light">
            <Container className="py-5">
                <NavLink to="/services" style={{ textDecorationColor: "gray" }}> <small style={{ color: "gray" }} >all services</small> </NavLink>
                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>


    );
};

export default HomeSectionServices;