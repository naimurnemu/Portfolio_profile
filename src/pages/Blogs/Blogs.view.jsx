import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <div className="text-center">
        <img
          className="img-fluid"
          src="https://i.ibb.co/Yf8y8BG/Coming-soon-neon-banner-vector-template-Glowing-night-bright-lettering-sign-for-advertisement.jpg"
          alt="coming-soon"
        />
        <br />
        <br />
        <br />
        <Link to="/">
          <Button className="fs-4 text-primary" variant="">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;