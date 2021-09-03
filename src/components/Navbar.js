import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() =>  history.push("/profile")}
          className="nav__avatar"
          src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
