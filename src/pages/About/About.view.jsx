import React, { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import "./About.css";
import "animate.css";
import { SEOProvider } from "../../components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { aboutButtons } from "./data";

const About = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <HelmetProvider>
      <Container className="portfolio-con">
        <SEOProvider title="About" />
        <div className="pt-md-3">
          <Container className="animate__animated animate__bounce animate__delay-0.5s">
            <Nav className="me-auto d-flex flex-wrap">
              {aboutButtons?.map((option) => (
                <Nav.Link
                  key={option.route}
                  className={`text-primary border ${pathname === option?.route ? "bg-primary text-light" : "border-primary fw-semibold"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => navigate(option?.route)}
                >
                  {option.name}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </div>
        <div style={{ maxWidth: "100vh !important" }}>
          <Outlet />
        </div>
      </Container>
    </HelmetProvider>

  );
};

export default About;

/* 
 <HelmetProvider>
        <Container>
        <SEOProvider title="About" />
         <Row> 
         <ContainerclassName="mt-0">
        <div  style={{margin: "-50px 5px"}} >
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
        </div>

        </ContainerclassName=> 
        </Row>  
        <div>

          <Outlet />
        </div>
        </Container> 
      </HelmetProvider>  */