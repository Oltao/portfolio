import React from "react";
import { motion } from "framer-motion";

import Button from "../components/Button";

const Layout = ({
  heading,
  span,
  details,
  btnTitle,
  btnLink,
  children,
  hideBtn,
}) => {
  return (
    <motion.section
      className="lg:w-[80%] m-auto flex flex-wrap justify-center align-middle gap-10"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <main className="lg:max-w-[50%] lg:items-start flex flex-col items-center self-center">
        <h1 className="flex flex-col text-gray1 text-large font-bold mb-5">
          {heading} <span className="text-dark dark:text-primary">{span}</span>
        </h1>
        <p className="text-pretty text-medium text-gray2 dark:gray1 mb-5">
          {details}
        </p>
        {!hideBtn && (
          <a href={btnLink || "#"}>
            <Button>{btnTitle}</Button>
          </a>
        )}
      </main>
      <div className="self-center">{children}</div>
    </motion.section>
  );
};

export default Layout;
