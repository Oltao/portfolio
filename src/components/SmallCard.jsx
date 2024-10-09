import React from "react";

const SmallCard = ({ icon, title }) => {
  return (
    <div className="bg-primary text-dark flex justify-center items-center gap-3 dark:bg-[#101e3f] dark:shadow-md dark:text-light px-8 py-7 text-medium shadow-md hover:scale-95">
      {icon}
      {title}
    </div>
  );
};

export default SmallCard;
