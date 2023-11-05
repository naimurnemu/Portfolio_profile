import React from 'react';
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
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514790193030-c89d266d5a9d)` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">I’m Naimur Rahman</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        "I love coding",
                        "I code cool websites",
                        "I develop mobile apps",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
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
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;