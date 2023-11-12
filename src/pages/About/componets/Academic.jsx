import React from "react";
import { Col, Row } from "react-bootstrap";
import acCover from "../../../assets/ac_cover.png"
import { AcademicCard } from "../../../components";
import { courses, qualifications } from "../data";

const Academic = () => {
  return (
    <Row className="mt-2 px-2 sec_sp animate__animated animate__fadeInBottomLeft animate__delay-0.5s">
      <Col xs={12} lg="5">
        <h3 className="color_sec py-4">Academic & Courses</h3>
        <div className="mt-2 d-none d-md-block">
          <img width={"100%"} height="auto" src={acCover} alt="Academics_cover" />
        </div>
      </Col>
      <Col  xs={12} lg="7">
        <div className="pt-4" >
          <h5 className="service__title">Academic Qualification:</h5>
          <div>
            {qualifications.reverse().map((item) => (
              <AcademicCard {...item} key={item.academy} />
            ))}
          </div>
        </div>
        <div >
          <h5 className="service__title">Courses:</h5>
          <div>
            {courses.map(({ logoURL, title, institude, period }) => (
              <Row key={logoURL} className="py-2 g-2">
                <Col xs={12} sm={3} md={2}>
                  <img
                    width="55px"
                    height="55px"
                    src={logoURL}
                    alt="Logo_Institude"
                  />
                </Col>
                <Col xs={12} sm={8} md={9}>
                  <p className="fw-bold m-0">
                    {title}
                  </p>
                  <small>
                    <span className="fs-6">{institude}</span>  · {period}
                  </small>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Academic;