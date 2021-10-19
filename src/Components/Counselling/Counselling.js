import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/session-img-1.png';
import './Counselling.css'

const Counselling = () => {
    return (
        <Container  className="my-5">
            <Row xs={1} md={2}  className="my-5">
                <Col>
                    <h6 style={{color: "#A97B5F"}}>Online Session</h6>
                    <h2 style={{fontWeight:"500", marginBottom: "20px"}}>Get A Counselling Right Now</h2>
                    <p>Therapy can teach you new ways to think about the situations that bother you. It can help you cope with feelings and situations. It can help with feelings of anger, fear, anxiety, shyness, and panic. It also can give you tools to help fight low self-esteem and depression.</p>

                    <button className="button">Get Now</button>
                </Col>
                <Col>
                    <div className="session-div">
                        <img width="100%" src={img} alt="" />
                    </div>

                </Col>

            </Row>
        </Container>

    );
};

export default Counselling;