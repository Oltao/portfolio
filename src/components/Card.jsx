import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Card = ({ img, title, desc, tools, code, view }) => {
  return (
    <section className="w-[300px] bg-primary shadow-md dark:bg-[#101e3f] rounded overflow-clip mx-5 my-3 lg:my-10 flex flex-col items-center">
      <img src={img} />
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-medium">{title}</h2>
        <p className="dark:text-gray1 text-small">{desc}</p>
        <p className="text-medium">{tools}</p>
        <div className="text-small flex gap-2 dark:text-gray1">
          <a href={code} target="_blank">
            <button className="flex gap-2 items-center hover:scale-105">
              <FaGithub />
              Code
            </button>
          </a>
          <a href={view} target="_blank">
            <button className="flex gap-2 items-center hover:scale-105">
              <FaEye />
              View
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
