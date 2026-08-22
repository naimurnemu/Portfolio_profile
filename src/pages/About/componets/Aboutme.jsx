import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfilePicture from "../../../assets/photo_3112023.png";

const Aboutme = () => {
  return (
    <Row className="mt-2 px-2 sec_sp animate__animated animate__fadeInBottomLeft animate__delay-0.5s">
      <Col xs={12} lg={5}>
        <div className="border border-info mt-3">
          <img
            width="100%"
            src={"https://i.ibb.co.com/XsRGFnv/Naimur.png"}
            alt="Profile_Picture"
          />
        </div>
      </Col>

      <Col xs={12} lg={7}>
        <div>
          <h3 className="color_sec text-center fs-2 fw-semibold">
            <small>I'm </small>
            <br />
            MD. Naimur Rahman Hridoy,
            <br />
            <small className="fs-6">
              a Frontend Software Engineer.
            </small>
          </h3>

          <br />

          <p className="fs-5" style={{ textAlign: "justify" }}>
            I build web products from the ground up, with React, Next.js, and
            TypeScript as my primary tools. With 4+ years of experience, I
            focus on building maintainable frontend systems, improving
            performance, and turning complex requirements into practical,
            reliable solutions.
            <br />
            <br />
            Frontend is my specialization, but my curiosity goes deeper than
            the framework. I have developed a strong foundation in programming,
            object-oriented design, data structures, algorithms, and computer
            science fundamentals while exploring how operating systems,
            networking, compilers, and computer architecture work beneath the
            abstractions.
            <br />
            <br />
            I enjoy understanding problems from the root, making thoughtful
            technical decisions, and working with engineering, product, sales,
            and marketing teams to turn ideas into useful products. I’m
            continuously expanding toward software architecture, system
            design, and the deeper layers of modern software engineering.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Aboutme;