import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { About, Blogs, Contact, Home, Portfolio } from "../pages";
import { NotFound, SocialProfiles } from "../components";
import withRouter from "../hooks/withRouter";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

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
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialProfiles />
    </div>
  );
}

export default AppRoutes;