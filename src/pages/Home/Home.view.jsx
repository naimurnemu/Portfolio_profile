import React from "react";
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Roadmap, SEOProvider } from "../../components";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home position-relative">
        <SEOProvider title="Home" />
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="text order-1 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center custom-class">
              <div className="intro mx-auto">
                <h2 className="mb-1x">
                  I’m Naimur <br />
                  Rahman
                </h2>

                <h4 className="fluidz-48 mb-1x mt-2 mb-4 text-warning">
                  <Typewriter
                    options={{
                      strings: [
                        "Frontend Software Engineer",
                        "React & Next.js Engineer",
                        "TypeScript Developer",
                        "Software Engineer at Heart",
                        "Computer Science Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h4>

                <p style={{ textAlign: "justify" }} className="mb-1x mb-5">
                  I build web products from the ground up, combining strong frontend
                  engineering with a deeper understanding of how software works beneath
                  the surface. I enjoy turning complex problems into simple, scalable
                  solutions—and continuously exploring what lies beyond the next
                  abstraction.
                </p>

                <div className="intro_btn-action pb-5">
                  <a
                    href="./resume.pdf"
                    download="naimur_rahman_frontend_resume.pdf"
                  >
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
          <div className="order-2 order-lg-2 h-75 flex-grow-1 justify-content-center px-5 ">
            <div className="text-start text-lg-center">
              <h2>Journey of Growth Unfolds</h2>
              <div className="text-center">
                <div className="scroll-indicator">
                  <div className="scroll-text">Scroll to see more</div>
                  <div className="scroll-arrow">↓</div>
                </div>
              </div>
            </div>
            <Roadmap />
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
