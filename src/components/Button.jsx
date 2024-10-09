import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className="flex justify-center items-center gap-5 bg-dark p-3 text-light dark:bg-light dark:text-dark relative after:absolute after:border-2 after:w-[100%] after:h-[100%] after:top-3 after:left-3 after:border-dark after:hover:top-0 after:hover:left-0 after:transition-border after:duration-700 after:dark:border-light after:-z-10 z-10"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
