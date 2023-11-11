import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {RxExit} from "react-icons/rx";
import ThemeToggle from "../ThemeToggle";
import { CurrentYear, logotext } from "./data";
import "./Header.css"
import logo from "../../assets/portfolio_logo.png"
import Menu from "./Menu.view";

const Header = () => {
  const [isActive, setIsActive] = useState("false");

  const handleToggle = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" to="/">
            <img className="header_logo" src={logo} alt="portfolio_logo" />
          </Link>
          <div className="d-flex align-items-center">
            <ThemeToggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <RxExit /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <Menu handleToggle={handleToggle} />
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/naimurnemu/">Linked In</a>
              <a target="_blank" rel="noreferrer" href="https://github.com/naimurnemu">Github</a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/naimurnemu">Twitter</a>
            </div>
            <p className="copyright m-0">Copyright &#169; {CurrentYear} {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Header;