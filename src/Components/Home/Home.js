import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Counselling from '../Counselling/Counselling';
import Footer from '../Footer/Footer';
import HomeSectionServices from '../HomeSectionServices/HomeSectionServices';
import MenuBar from '../MenuBar/MenuBar';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner>
                <div style={{ zIndex: "1" }}>
                    <h2 style={{ color: "white"}} >Perhu - Life Coach & Therapist</h2>
                    <div className="text-center">
                        <NavLink to="/services" className="navlink"> Services</NavLink>
                        <NavLink to="/contacts" className="navlink"> - Contacts</NavLink>
                    </div>
                </div>


            </Banner>
            <HomeSectionServices></HomeSectionServices>
            <Counselling></Counselling>
            <Footer></Footer>
        </div>
    );
};

export default Home;