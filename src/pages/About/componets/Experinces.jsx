import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { experinces } from '../data';
import expCover from "../../../assets/exp_cover.png";

const Experinces = () => {
  return (
    <Row className="mt-5 sec_sp p-2">
      <Col xs={12} md={6}>
        <h3 className="color_sec py-4">Work Timline</h3>
        <div className="mt-2 d-none d-md-block">
          <img width={"100%"} height="auto" src={expCover} alt="exp_cover" />
        </div>
      </Col>
      <Col xs={12} md={6} className="py-5">
        {experinces.map(({ company, logoURL, position, timeline, jobType, desciption }) => (
          <Row className="mt-4" key={logoURL}>
            <Col xs={12} md={3}>
              <div className="mt-3">
                <img
                  width="100px"
                  height="100px"
                  src={logoURL}
                  alt="Logo_Academy"
                />
              </div>
            </Col>
            <Col className=" service__title" xs={12} md={9}>
              <p className="fs-5 m-0">
                {position}
              </p>
              <p className="m-0">
                <span className="fs-6 fw-semibold">{company}</span>  · {jobType}
              </p>
              <small>
                {timeline}
              </small>
              <p style={{textAlign: "justify"}}>
                <small>
                  {desciption}
                </small>
              </p>
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default Experinces;