import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfilePicture from "../../../assets/photo_3112023.png";

const Aboutme = () => {
  return (
    <Row className="mt-2 px-2 sec_sp animate__animated animate__fadeInBottomLeft animate__delay-0.5s">
      <Col xs={12} lg={5}>
        <div className="border border-info mt-3 ">
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
            <small className="fs-6">a passionate programmer.</small>
          </h3>
          <br />
          <p className="fs-5" style={{ textAlign: "justify" }}>
            With a strong background in front-end development, I specialize in
            JavaScript, ReactJS, Next.js, and CSS, building intuitive,
            high-performance user interfaces. My experience has taught me how to
            create seamless, responsive designs that work across all devices.
            <br />
            <br />
            While front-end development is my primary focus, I’ve expanded my
            skills into backend technologies, particularly Python and Django.
            I’ve worked on server-side logic, database management, and API
            integration, continually improving my understanding of clean,
            efficient code and testing practices.
            <br />
            <br />
            My journey in both front-end and backend development has equipped me
            to build well-rounded, robust applications, with a focus on solving
            real problems and delivering reliable, scalable solutions.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Aboutme;
