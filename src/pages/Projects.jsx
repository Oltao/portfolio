import React from "react";
import Layout from "../components/Layout";
import { projectsContent } from "../text/TextContent";
import Card from "../components/Card";

const Projects = () => {
  return (
    <Layout
      heading={projectsContent.heading}
      span={projectsContent.span}
      details={projectsContent.details}
      btnTitle="View Github"
      btnLink={projectsContent.link}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-1 lg:overflow-y-scroll lg:overflow-x-hidden lg:max-h-80">
        {projectsContent.projects.map((project) => (
          <Card
            img={project.img}
            title={project.title}
            desc={project.desc}
            tools={project.tools.join(" + ")}
            code={project.githubLink}
            view={project.viewLink}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
