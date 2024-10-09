import React from "react";
import { NavLink } from "react-router-dom";
import SwitchMode from "./SwitchMode";
import { RiCloseLargeLine } from "react-icons/ri";

const MobileNav = ({ onclick }) => {
  return (
    <nav className="lg:hidden bg-light dark:bg-dark w-80 h-screen fixed top-0 right-0 z-50 flex flex-col justify-center items-center shadow-xl">
      <button
        onClick={onclick}
        type="button"
        className="font-extrabold text-3xl relative -top-20"
      >
        <RiCloseLargeLine />
      </button>
      <ul className="flex flex-col gap-14 text-center font-semibold text-lg uppercase">
        <li className="" onClick={onclick}>
          <NavLink to="/">About</NavLink>
        </li>
        <li className="" onClick={onclick}>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li className="" onClick={onclick}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="" onClick={onclick}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="relative -bottom-10">
        <SwitchMode />
      </div>
    </nav>
  );
};

export default MobileNav;
