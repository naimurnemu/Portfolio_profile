import React from 'react';
import { Col, Row } from 'react-bootstrap';
import acCover from "../../../assets/ac_cover.png"

const Academic = () => {
  return (
    <Row className="mt-5 sec_sp animate__animated animate__fadeInBottomLeft animate__delay-0.5s">
      <Col lang="5">
        <h3 className="color_sec py-4">Academic & Courses</h3>
        <div className="mt-2">
          <img width={"100%"} height="auto" src={acCover} alt="Academics_cover" />
        </div>
      </Col>
      <Col lg="7">
        <div className="service_ py-4" >
          <h5 className="service__title">React Expert:</h5>
          <p className="service_desc">
            Possesses a deep understanding of React.js and its ecosystem, leveraging this knowledge to develop sophisticated and responsive user interfaces.
            Demonstrates proficiency in state management, component lifecycle, and virtual DOM, ensuring seamless rendering and optimal performance of web applications.
            Applies advanced techniques like code splitting and lazy loading to enhance application speed, providing users with a smooth browsing experience.
          </p>
        </div>
        <div className="service_ py-4" >
          <h5 className="service__title">UX/UI Maestro:</h5>
          <p className="service_desc">
            Collaborates closely with UX/UI designers to transform design mockups into pixel-perfect, visually appealing interfaces, focusing on user-centered design principles.
            Implements responsive web design, ensuring applications are accessible and functional across various devices and screen sizes.
            Utilizes CSS pre-processors like Sass or LESS to create modular and maintainable stylesheets, enhancing the application"s overall aesthetics.
          </p>
        </div>
        <div className="service_ py-4" >
          <h5 className="service__title">Problem Solver & Innovator:</h5>
          <p className="service_desc">
            Possesses strong analytical and problem-solving skills, adept at identifying and resolving complex issues within the application architecture.
            Implements innovative solutions to enhance user interactions, employing libraries and frameworks to create dynamic user interfaces.
            Actively engages in code reviews and refactoring processes, contributing to the improvement of code quality and overall development practices.
          </p>
        </div>
        <div className="service_ py-4" >
          <h5 className="service__title">Version Control & Collaboration:</h5>
          <p className="service_desc">
            Proficient in version control systems such as Git, effectively collaborating with team members and managing code repositories.
            Demonstrates strong communication skills, actively participating in team discussions, and sharing insights to enhance the collaborative development process.
            Collaborates with back-end developers and integrates front-end components with back-end API endpoints, ensuring seamless data flow and application functionality.
          </p>
        </div>
        <div className="service_ py-4" >
          <h5 className="service__title">Agile Development Practitioner:</h5>
          <p className="service_desc">
            Adopts Agile methodologies, participating in sprint planning, daily stand-ups, and retrospectives to ensure efficient project management and timely delivery of features.
            Embraces continuous integration and deployment practices, automating build processes and ensuring a smooth release cycle for the developed applications.
            Demonstrates adaptability and flexibility, thriving in a fast-paced, collaborative environment, and meeting project deadlines effectively.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Academic;