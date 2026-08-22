import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import { SEOProvider } from "../../components";
import { articles } from "./data";
import "./Blogs.css";

const Blogs = () => {
  return (
    <HelmetProvider>
      <Container className="blogs-page">
        <SEOProvider title="Blogs" />
        <header className="blogs-header animate__animated animate__fadeInUp">
          <p className="blogs-kicker">Thoughts, notes & experiments</p>
          <h1>Writing on Medium</h1>
          <p className="blogs-intro">
            A collection of practical lessons from building products,
            learning new tools, and working through the details.
          </p>
        </header>

        <Row className="g-4 pb-5">
          {articles.map((article) => (
            <Col key={article.id} xs={12} md={6} lg={4}>
              <Card className="blog-card h-100 animate__animated animate__fadeInUp">
                <a
                  className="blog-thumbnail-link"
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img
                    className="blog-thumbnail"
                    variant="top"
                    src={article.thumbnail}
                    alt=""
                  />
                </a>
                <Card.Body className="d-flex flex-column">
                  <p className="blog-meta">MEDIUM / {article.category}</p>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text className="blog-caption">
                    {article.caption}
                  </Card.Text>
                  <Button
                    className="blog-link mt-auto align-self-start"
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline-danger"
                  >
                    Read article <span aria-hidden="true">↗</span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default Blogs;