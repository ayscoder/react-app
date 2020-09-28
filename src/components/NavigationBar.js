import React from "react";
// import { NavBar } from "react-bootstrap";
// import * as styled from "styled-components";
import "../App.css";
import {
  Navbar,
  NavbarBrand,
  FormControl,
  Form,
  NavDropdown,
} from "react-bootstrap";
// import { NavbarCollapse } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav, NavLink, Button } from "react-bootstrap";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import imgUrl from "../assets/dark.jpeg";
import logo from "../assets/logo.png";
// import Image from "react-bootstrap/Image";
const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <NavbarBrand href="/" style={{ color: "white" }}>
      {/* <Image src={logo} /> */}
      <h5 style={{ color: "RED", fontSize: 30 }}>ADA</h5>
    </NavbarBrand>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact" style={{}}>
        Contact
      </NavLink>
      <NavDropdown title="Features" className="nav-dropdown">
        <NavDropdown.Item href="/contact">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/signup">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
      <Nav.Item>
        <NavLink href="/login" style={{ color: "white" }}>
          Login
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink href="/signup" id="signup">
          <Button style={{ background: "green", borderColor: "green" }}>
            SignUp
          </Button>
        </NavLink>
      </Nav.Item>
    </Nav>
    {/* </NavbarCollapse> */}
    {/* </NavbarCollapse> */}
  </Navbar>
  //   </Styles>
);

export default NavigationBar;
