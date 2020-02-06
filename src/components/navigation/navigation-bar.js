import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #2b2b2b;
  }

  .navbar-brand {
    color: #c1cfda;

    &:hover {
      color: #c1cfda;
    }
  }
  .navbar-nav .nav-link {
    color: #c1cfda;
    border-bottom: 2px solid transparent;
    transition: border-bottom 1s;

    &:hover {
      border-bottom: 2px solid #c1cfda;
      color: #c1cfda;
    }
  }
`;

const NavigationBar = (props) => {
  return (
    <Styles>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">Crave Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
