import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

export const ScrollToTop = withRouter(_ScrollToTop);