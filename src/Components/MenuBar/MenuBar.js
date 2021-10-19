import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import './MenuBar.css';
import useAuth from '../../hooks/useAuth/useAuth';

const MenuBar = () => {

  const { user,handleSignOut } = useAuth();
  console.log(user);
  return (


    <Navbar sticky="top" bg="light" expand="lg" className="p-3 bg-white menu">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/contacts">Contacts</Nav.Link>


            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/appoinment">Make An Appoinment</Nav.Link>
          </Nav>

          {
            !user?.displayName ?
              <><Nav.Link as={NavLink} activeStyle={{
                fontWeight: "bold",
                color: "#A47355"
              }} to="/signIn">Sign in</Nav.Link>
                <Nav.Link as={NavLink} activeStyle={{
                  fontWeight: "bold",
                  color: "#A47355"
                }} to="/signUp">Sign up</Nav.Link></>
              :
              <Nav.Link as={NavLink} onClick={handleSignOut} activeStyle={{
                fontWeight: "bold",
                color: "#A47355"
              }} to="/">Sign Out</Nav.Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MenuBar;