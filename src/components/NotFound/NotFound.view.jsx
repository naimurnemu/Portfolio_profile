import React from 'react';
import notFound from "../../assets/not_found.png";

const NotFound = () => {

  return (
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <div className="text-center">
        <img
          width="100%"
          src={notFound}
          alt="Page_not_found"
        />
        <br />
        <br />
        <p className='fs-5'>The page you were looking for could not be found.</p>
      </div>
    </div>
  );
};

export default NotFound;