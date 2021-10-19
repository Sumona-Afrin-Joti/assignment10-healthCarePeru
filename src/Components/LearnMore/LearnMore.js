import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './LearnMore.css'

const LearnMore = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data =>{
                const matchedService = data.find(service => service.id === id);
                setDetails(matchedService)
            })
    }, [id])
    
    const { service_name, description, img } = details;

    return (
        <div>
            <MenuBar></MenuBar>
            <Container className="my-5">
                <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">
                    <Col>

                        <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>{service_name}</h2>
                        <p>{description}</p>
                        <NavLink to="/appoinment"><button className="button">Make Appoinment</button></NavLink>

                    </Col>
                    <Col className="">
                        <div>
                            <img width="100%" className=" details-img img-fluid" src={img} alt="" />
                        </div>

                    </Col>

                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default LearnMore;