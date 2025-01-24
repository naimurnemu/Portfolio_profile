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

