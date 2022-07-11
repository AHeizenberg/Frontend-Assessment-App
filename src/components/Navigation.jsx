import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navigation.css";

import { IoKeypad, BsFillTelephoneFill } from "react-icons/all";

import { FiSettings, FiUser } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="hl"></div>
      <ul>
        <li>
          <NavLink to="/">
            <BsFillTelephoneFill size="2.5em" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            <FiUser size="2.5em" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/keypad">
            <IoKeypad size="2.5em" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <FiSettings size="2.5em" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
