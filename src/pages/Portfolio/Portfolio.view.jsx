import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Project, SEOProvider } from "../../components";
import { Container, Nav, Row } from "react-bootstrap";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { projects } from "./data";
import "./Portfolio.css";

const buttons = ["All", "React", "MERN", "Redux"]

const Portfolio = () => {
  const [selected, setSelected] = useState("All");
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (selected === "React") {
      setContent(projects?.sort((a, b) => b.id - a.id)
        ?.filter((item) => item.filterKeys.includes("React"))
        ?.map((option) => (<Project key={option.id} {...option} />)))
    } else if (selected === "MERN") {
      setContent(projects?.sort((a, b) => b.id - a.id)
        ?.filter((item) => item.filterKeys.includes("MERN"))
        ?.map((option) => (<Project key={option.id} {...option} />)))
    } else if (selected === "Redux") {
      setContent(projects?.sort((a, b) => b.id - a.id)
        ?.filter((item) => item.filterKeys.includes("Redux"))
        ?.map((option) => (<Project key={option.id} {...option} />)))
    } else {
      setContent(projects?.sort((a, b) => b.id - a.id)
        ?.map((option) => (<Project key={option.id} {...option} />)));
    }
  }, [selected]);

  return (
    <HelmetProvider>
      <Container className="portfolio-con">
        <SEOProvider title="Portfolio" />
        <div className="pt-md-3">
          <Container className="animate__animated animate__headShake animate__delay-1s">
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
        <div className="mb-5">
          <Row className="justify-content-start align-items-stretch px-3 pb-5 g-5">
            {content}
          </Row>
        </div>
        <div className="scroll_box">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-pill scroll_btn"
          >
            <BsFillArrowUpCircleFill size={35} />
          </button>
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Portfolio;