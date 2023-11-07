import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./App.css";
import { Header } from "./components";
import AnimatedCursor from "./hooks/AnimatedCursor";
import { ScrollToTop } from "./utils/ScrollToTop";
// import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Header />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
