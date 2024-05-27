import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto mt-2">
      <div>
        <span className="text-pink-500 font-bold text-6xl brand ms-5">JS</span>
      </div>
      <div>
        <ul className="flex justify-between md:gap-4 mr-3 font-medium">
          <li className="mr-5 md:mr-0 navlink">
            <Link to="header" smooth={true} duration={900}>
              Home
            </Link>
          </li>
          <li className="mr-5 md:mr-0 navlink">
            <Link to="about" smooth={true} duration={900}>
              About
            </Link>
          </li>
          <li className="mr-5 md:mr-0 navlink">
            <Link to="tech" smooth={true} duration={900}>
              Techs
            </Link>
          </li>
          <li className="mr-5 md:mr-0 navlink">
            <Link to="work" smooth={true} duration={900}>
              Work
            </Link>
          </li>
          <li className="navlink">
            <Link to="contact" smooth={true} duration={900}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
