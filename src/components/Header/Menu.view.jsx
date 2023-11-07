import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from "../../assets/fQ1Aukv8h1.json";
import { Col, Container, Row } from 'react-bootstrap';

const Menu = (props) => {
  const { handleToggle } = props || {};

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="bg__menu h-100">
      <div className="menu__wrapper">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <ul className="the_menu">
                <li className="menu_item ">
                  <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3">Contact</Link>
                </li>
                <li className="menu_item">
                  <Link onClick={handleToggle} to="/blogs" className="my-3">Blogs</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <div className='animation-container'>
                <Lottie
                options={lottieOptions}
                height="50%"
                width="50%"
              />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Menu;