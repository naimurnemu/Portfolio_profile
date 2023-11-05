import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscGrabber, VscClose } from "react-icons/vsc";
import ThemeToggle from '../ThemeToggle';
import { CurrentYear, SocialAccounts, logotext } from './data';

const Header = () => {
  const [isActive, setIsActive] = useState("false");

  const handleToggle = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  return (
    <div>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <ThemeToggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
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
                    <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/blogs" className="my-3">Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={SocialAccounts.linkedIn}>Facebook</a>
              <a href={SocialAccounts.github}>Github</a>
              <a href={SocialAccounts.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">Copyright &#169; {CurrentYear} {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </div>
  );
};

export default Header;