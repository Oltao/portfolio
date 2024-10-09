import React from "react";
import Layout from "../components/Layout";
import { skillsContent } from "../text/TextContent";
import SmallCard from "../components/SmallCard";
import { FaGitAlt, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineJavaScript } from "react-icons/ai";

const Skills = () => {
  return (
    <Layout
      heading={skillsContent.heading}
      span={skillsContent.span}
      details={skillsContent.details}
      btnTitle="View Resume"
    >
      <div className="grid grid-cols-2 gap-3">
        {skillsContent.tools.map((tool, index) => (
          <SmallCard
            key={index}
            title={tool}
            icon={skillsContent.icons[index]}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
