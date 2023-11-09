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

  console.log(pathname === "/about");
  return (
    <HelmetProvider>
      <Container className="About-header">
        <SEOProvider title="About" />
        <Row>
          <Navbar className="mt-2" fixed="top" bg="transparent" data-bs-theme="primary">
            <Container className="mt-5 animate__animated animate__bounce animate__delay-0.5s ">
              <Nav className="me-auto mt-2 d-flex flex-wrap">
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
          </Navbar>
        </Row> 
        <Outlet />
        
        
      </Container>
    </HelmetProvider>
  );
};

export default About;