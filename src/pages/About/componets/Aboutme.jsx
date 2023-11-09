import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProfilePicture from "../../../assets/photo_3112023.png"

const Aboutme = () => {
  return (
    <Row className="pt-md-5 mt-5 sec_sp animate__animated animate__backInRight animate__delay-0.5s">
      <Col lg="5">
        <div className="border border-info mt-4 mt-sm-0 "> {/* mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 */}
          <img width="100%" src={ProfilePicture} alt="Profile_Picture" />
        </div>
      </Col>
      <Col lg="7" className="d-flex align-items-start">
        <div>
          <h3 className="color_sec pt-5 fs-4">
            I'm MD. Naimur Rahman Hridoy, a passionate front-end focused MERN stack developer from Dhaka, Bangladesh.
          </h3>
          <br />
          <p className="fs-5" style={{ textAlign: "justify" }}>
            With a mastery of JavaScript, ReactJS, and GraphQL, I weave mesmerizing digital wonders. At MedLink Healthcare Private Limited, I've not just enhanced user experiences; I've ignited revenue growth with cutting-edge front-end innovation. Dive into my world of excellence, showcased in MedLinkJobs.com, India's pinnacle in healthcare recruitment. Join me in shaping the future of the web with boundless creativity and transformative technology. Let's make magic together!!!
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Aboutme;