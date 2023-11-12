import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AcademicCard.css"

const AcademicCard = (props) => {
  const { degree, topic, academy, period, logoURL } = props || {};
  return (
    <Row className="text-start mx-2 px-1 py-3 rounded acd-box my-3 g-3">
      <Col xs={12} sm={3} lg={2}>
        <img
          width="80px"
          height="80px"
          src={logoURL}
          alt="Logo_Academy"
        />
      </Col>
      <Col xs={12} sm={8} lg={9}>
        <div style={{marginTop: "-10px"}} className="ms-md-3">
          <p className="fs-5 m-0">
            {degree}
          </p>
          <p className="m-0">
            {academy}
          </p>
          <small>
            <span className="fs-6">{topic}</span>  · {period}
          </small>
        </div>

      </Col>
    </Row>
  );
};

export default AcademicCard;