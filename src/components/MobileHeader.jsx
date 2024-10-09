import React, { useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";
import MobileNav from "./MobileNav";

const MobileHeader = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <header className="px-10 text-2xl font-extrabold mb-20 lg:hidden flex justify-between sticky top-0 left-0 bg-light dark:bg-dark py-3 z-50">
        <div className="uppercase">Oltao</div>

        <button
          onClick={handleClick}
          type="button"
          className="font-extrabold text-3xl transition-all duration-1000"
        >
          <RiMenu3Line />
        </button>
      </header>
      {visible && <MobileNav onclick={handleClick}/>}
    </>
  );
};

export default MobileHeader;
