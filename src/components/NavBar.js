import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav">
      <div id="nav-container"> 
      <img id="logo" src="" />
      <h3>ACME Academy</h3>
      <NavLink to={"/"}>
        <span className="linkName">Home</span>
      </NavLink>
      <NavLink to={"/campuses"}>
        <span className="linkName">Campuses</span>
      </NavLink>
      <NavLink to={"/students"}>
        <span className="linkName">Students</span>
      </NavLink>
      </div>
      <h3 className="slogan"> </h3>
    </nav>
  );
};

export default Nav;
