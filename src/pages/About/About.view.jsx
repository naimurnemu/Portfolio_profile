import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HelmetProvider } from 'react-helmet-async';
import { services, skills, timeline } from './data';
import "./About.css";
import 'animate.css';
import { SEOProvider } from '../../components';

const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <SEOProvider />
        <Row className="mb-5 mt-3 pt-md-3 animate__animated animate__bounce animate__delay-1s animate__slow">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp animate__animated animate__backInRight">
          <Col lg="5">
            <h3 className="color_sec py-4">about my self</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p> aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {timeline.map((data, i) => {
                  return (
                    <tr key={data.id}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
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
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
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
                Utilizes CSS pre-processors like Sass or LESS to create modular and maintainable stylesheets, enhancing the application's overall aesthetics.
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
      </Container>
    </HelmetProvider>
  );
};

export default About;