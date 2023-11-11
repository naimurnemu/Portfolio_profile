import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Project, SEOProvider } from '../../components';
import { Container, Nav, Row } from 'react-bootstrap';
import { projects } from './data';

const buttons = ["All", "React", "MERN", "Redux"]

const Portfolio = () => {
  const [selected, setSelected] = useState("All");
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (selected === "All") {
      setContent(projects?.map((option) => (<Project key={option.id} {...option} />)))
    }

  }, [selected]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <SEOProvider title="Portfolio" />
        <div className="pt-md-3">
          <Container className="animate__animated animate__backInRight animate__delay-0.5s">
            <Nav className="me-auto d-flex flex-wrap">
              {buttons.map((button) => (
                <Nav.Link
                  key={button}
                  className={`fs-md-4 border fw-semibold ${selected === button ? "bg-danger text-dark" : "border-danger text-danger"} my-1 me-3 rounded-pill px-3`}
                  onClick={() => setSelected(button)}
                >
                  {button}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
          <hr className="t_border my-2 ml-0 text-left" />
        </div>
        <div className="mb-4">
          <Row className="justify-content-start align-items-stretch">
            {content}
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;