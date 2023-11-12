import React from "react";
import { Col, Row } from "react-bootstrap";
import { experinces } from "../data";
import expCover from "../../../assets/exp_cover.png";

const Experinces = () => {
  return (
    <Row className="mt-5 sec_sp p-2">
      <Col xs={12} md={6}>
        <h3 className="color_sec pt-3 py-md-5">Work Timeline</h3>
        <div className="mt-2 d-none d-md-block">
          <img width={"100%"} height="auto" src={expCover} alt="exp_cover" />
        </div>
      </Col>
      <Col xs={12} md={6} className="py-1 py-md-5">
        {experinces.map(({ company, logoURL, position, timeline, jobType, desciption }) => (
          <Row className="mt-md-4 service__title" key={logoURL}>
            <Col xs={12} md={4} lg={3}>
              <div className="mt-3">
                <img
                  width="100px"
                  height="100px"
                  src={logoURL}
                  alt="Logo_Academy"
                />
              </div>
            </Col>
            <Col className="pt-2" xs={12} md={8} lg={9}>
              <div className="ms-1">
                <p className="fs-5 m-0">
                  {position}
                </p>
                <p className="m-0">
                  <span className="fs-6 fw-medium">{company}</span>  · {jobType}
                </p>
                <small>
                  {timeline}
                </small>
                <p style={{ textAlign: "justify" }}>
                  <small className="fw-light">
                    {desciption}
                  </small>
                </p>
              </div>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default Experinces;