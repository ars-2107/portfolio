"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "Nest",
    description: "A real estate CRM designed to manage leads and boost team productivity.",
    image: "/images/projects/nest-thumbnail.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.nestcrm.app",
  },
  {
    id: 2,
    title: "Raveo",
    description: "An ultimate platform for movie enthusiasts to discover, rate, and review films.",
    image: "/images/projects/raveo-thumbnail.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ars-2107/raveo/",
    previewUrl: "https://raveo.vercel.app/",
  },
  {
    id: 1,
    title: "Web-X",
    description: "Empowering you to effortlessly create articles and blogs with precision and ease.",
    image: "/images/projects/web-x-thumbnail.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ars-2107/web-x",
    previewUrl: "https://web-x-01.vercel.app/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="mt-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center mb-4 items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <section id="playground"></section>
    </section>
  );
};

export default Projects;
