import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const MakeAppoinment = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner >
                <div style={{color: "white", zIndex: "1", textAlign: "center" }}>
                    <h2>Make An Appoinment</h2>
                    <p>Telehealth, or virtual visits is helping make access to health care more convenient. People can see and talk to a doctor through their smartphone, tablet or computer, meaning they don't have to go to a doctor's office or sit in a waiting room. Instead, they can visit with a doctor from the comfort of their own home.</p>
                </div>
            </Banner>
            <Appoinment></Appoinment>

            <Footer></Footer>
        </div>
    );
};

export default MakeAppoinment;