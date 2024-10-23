import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-50% h-[100%] lg:flex flex-col justify-center uppercase text-small hidden">
        <div className="w-1 h-[100px] bg-dark self-center absolute top-0 left-50% dark:bg-light"></div>

        <ul className="flex flex-col gap-14 text-center font-bold">
          <li className="-rotate-90">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="-rotate-90">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="-rotate-90">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="-rotate-90">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="w-1 h-[100px] bg-dark dark:bg-light self-center absolute bottom-0 left-50%"></div>
      </nav>
    </>
  );
};

export default navbar;
