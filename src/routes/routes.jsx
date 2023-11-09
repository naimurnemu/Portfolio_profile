import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { About, Blogs, Contact, Home, Portfolio } from "../pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NotFound, SocialProfiles } from "../components";
import { Aboutme, Academic, Experinces, Skills } from "../pages/About";
import "./AppRoutes.css";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Aboutme />} />
          <Route path="intro" element={<Aboutme />} />
          <Route path="academic" element={<Academic />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experinces" element={<Experinces />} />
        </Route>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

const AppRoutes = () => {

  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialProfiles />
    </div>
  );
};

export default AppRoutes;
