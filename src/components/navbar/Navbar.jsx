import { DarkModeContext } from "../../context/DarkmodeContext";
import "./navbar.scss";
import React, { useContext } from "react";
import { BsMoonStars, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      Navbar
      <div className="">
        {darkMode ? (
          <BsSunFill onClick={toggle} />
        ) : (
          <BsMoonStars onClick={toggle} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
