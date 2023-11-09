import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { timeline } from '../data';
import expCover from "../../../assets/exp_cover.png";

const Experinces = () => {
  return (
    <Row className="mt-5 sec_sp">
      <Col lg="5">
        <h3 className="color_sec py-4">Work Timline</h3>
        <div className="mt-2">
          <img width={"100%"} height="auto" src={expCover} alt="exp_cover" />
        </div>
      </Col>
      <Col lg="7">
        <table className="d-flex align-items-center">
          <div className="table caption-top">
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
          </div>
        </table>
      </Col>
    </Row>
  );
};

export default Experinces;