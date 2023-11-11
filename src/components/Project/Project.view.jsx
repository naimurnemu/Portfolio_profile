import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Project.css";

const Project = (props) => {
  const { name, timeLine, githubLink, liveLink, coverURL, caption, technologies, tools, showCode, logoURL } = props || {};
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="animate__animated animate__pulse bg-transparent shadow_c h-full h-100">
        <div style={{ background: `url(${coverURL})` }} className="c_bg_img">
          <div className="project_c">
            <div className="project_c_title">
              <p className="fs-4 fw-medium">{name}</p>
              <p className="fs-6">{timeLine}</p>
            </div>
            <div className="content_overlay">
              <img className="overlay_img" width="100%" height="auto" src={logoURL} alt="Project_logo" />
              <p className="fs-4 fw-medium">{name}</p>
              <p className="fw-medium">{caption}</p>
              {showCode ? (
                <div className="d-flex align-items-center justify-content-between">
                  <a target="_blank" rel="noreferrer" href={githubLink}>
                    <button className="btn btn-outline-secondary rounded-pill c_button border-2">Code</button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={liveLink}>
                    <Button className="rounded-pill c_button" variant="secondary">View Live</Button>
                  </a>
                </div>
              ) : (
                <div className="text-center">
                  <a target="_blank" rel="noreferrer" href={liveLink}>
                    <Button className="rounded-pill c_button" variant="secondary">View Live</Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project_c_body">
          <p>
            Technologies <br />
            {technologies?.map((tech) => (<span key={tech} className="tech_item">{tech}</span>))}
          </p>
          <p style={{ marginTop: "-12px" }}>
            Tools <br />
            {tools?.map((tool) => (<span key={tool} className="tool_item">{tool}</span>))}
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Project;