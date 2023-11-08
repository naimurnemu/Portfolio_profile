import React from 'react';
import "./Home.css"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SEOProvider } from '../../components';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <SEOProvider />
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-1 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">I’m known as <br />Md. Naimur Rahman Hridoy</h2>
                <h4 className="fluidz-48 mb-1x mt-2 mb-4 text-warning">
                  <Typewriter
                    options={{
                      strings: [
                        "JavaScript Programmer",
                        "Front-End Engineer",
                        "MERN Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h4>
                <p style={{ textAlign: "justify" }} className="mb-1x mb-5">
                  Experiences in developing various types of single-page applications with responsive and scalable designs also ensuring optimal performance.<br /><br />
                  Passionate about cutting-edge, pixel-perfect, beautiful UI and intuitively implemented UX.
                </p>
                <div className="intro_btn-action pb-5">
                  <a type="button" href="./Resume.pdf" download>
                    <div id="button_p" className="ac_btn btn">
                      Download Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h_bg-image order-2 order-lg-2 h-100 "
            style={{ backgroundImage: `url("https://i.ibb.co/TttMy9R/cover-light.jpg")` }}
          />
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;