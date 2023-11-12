import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import "./About.css";
import "animate.css";
import { SEOProvider } from "../../components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation() || {};
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  }

  return (
    <HelmetProvider>
      <Container>
        <SEOProvider title="About" />
        <Row>
            <Container style={{margin: "-50px 5px"}} className="mt-0">
              <Nav className="me-auto d-flex flex-wrap animate__animated animate__bounce animate__delay-0.5s">
                <Nav.Link
                  className={`text-primary fs-md-4 border ${pathname === "/about" ? "bg-primary text-light" : "border-primary fw-semibold"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => handleNavigate("/about")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className={`text-primary fs-md-4 border ${pathname === "/about/academic" ? "bg-primary text-light" : "border-primary fw-semibold"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => handleNavigate("/about/academic")}
                >
                  Academics
                </Nav.Link>
                <Nav.Link
                  className={`text-primary fs-md-4 border ${pathname === "/about/skills" ? "bg-primary text-light" : "border-primary fw-semibold"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => handleNavigate("/about/skills")}
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  className={`text-primary fs-md-4 border ${pathname === "/about/experinces" ? "bg-primary text-light" : "border-primary fw-semibold"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => handleNavigate("/about/experinces")}
                >
                  Experinces
                </Nav.Link>
              </Nav>
            </Container>
        </Row> 
        <Outlet />
      </Container>
    </HelmetProvider>
  );
};

export default About;