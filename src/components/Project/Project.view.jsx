import React from 'react';
import { Button, Card, CardBody, Col } from 'react-bootstrap';
import "./Project.css";

const Project = (props) => {
  const { name, timeLine, githubLink, liveLink, coverURL, caption, technologies, filterKeys, showCode } = props || {};
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="bg-transparent shadow_c">
        <div  style={{ background: `url(${coverURL})` }} className="c_bg_img">
          <div className="project_c">
            <div className="project_c_title">
              <p className='fs-4'>{name}</p>
              <p className='fs-6'>{timeLine}</p>
            </div>
            <div className="content_overlay">
              <p className='fs-4'>{name}</p>
              <p>{caption}</p>
            </div>
          </div>
        </div>


        <div className="project_c_body">
          <p>
            Technologies
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Project;