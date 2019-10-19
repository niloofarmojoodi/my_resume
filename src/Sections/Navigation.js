import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import { Link, Element } from "react-scroll";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar  variant="light" fixed="top">
          <Nav className="mr-auto">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={115}
              duration={530}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link class="nav-link">About</Nav.Link>
            </Link>

            <Element name="about" className="element" />
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={240}
              duration={550}
              onSetActive={this.handleSetActive}
            >
              <Nav.Link class="nav-link">Skills</Nav.Link>
            </Link>

            <Element name="skills" className="element" />
            
            
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;
