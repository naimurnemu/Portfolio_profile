import React from "react";
import { Col, Row } from "react-bootstrap";
import { skills } from "../data";
import skillCover from "../../../assets/skill_cover.png"

const Skills = () => {
  return (
    <Row className="mt-5 sec_sp animate__animated animate__rotateInUpLeft animate__delay-0.5s">
      <Col lg="5">
        <h3 className="color_sec py-4">Skills</h3>
        <div className="mt-2 d-none d-md-block">
          <img width={"100%"} height="auto" src={skillCover} alt="skill_cover" />
        </div>
      </Col>
      <Col lg="7">
        {skills.map((data, i) => (
          <div key={data.name}>
            <h3 className="progress-title">{data.name}</h3>
            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${data.value}%`,
                }}
              >
                <div className="progress-value">{data.value}%</div>
              </div>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Skills;