import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOProvider } from '../../components';
import { Col, Container, Row } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <SEOProvider title="Portfolio" />
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {[].map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>view project</a>
              </div>
            </div>
          ))}
        </div>
      </Container>

    </HelmetProvider>
  );
};

export default Portfolio;