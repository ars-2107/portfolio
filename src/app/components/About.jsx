"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
    <ul className="list-disc pl-2 grid grid-cols-2 lg:grid-cols-3">
      <li>Python</li>
      <li>R</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>React</li>
      <li>Next.js</li>
      <li>Express</li>
      <li>MongoDB</li>
      <li>MySQL</li>
      <li>Git</li>
      <li>DevOps</li>
      <li>Cloud Services</li>
      <li>Data Structures</li>
      <li>Algorithms</li>
      <li>Pandas</li>
      <li>Numpy</li>
      <li>Scikit-Learn</li>
      <li>TensorFlow</li>
      <li>PyTorch</li>
      <li>Octave</li>
      <li>Data Visualization</li>
      <li>Statistical Analysis</li>
      <li>Machine Learning</li>
      <li>Deep Learning</li>
      <li>Natural Language Processing</li>
      <li>Reinforcement Learning</li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science in Computer Science
        <br />- Thakur College of Science and Commerce</li>
        <br />
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Java Developer (Intern)
        <br />@SDAC Infotech</li>
        <br />
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning by Stanford University</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate Full Stack Developer and Machine Learning Engineer, 
            bringing a unique blend of technical expertise and creativity to the 
            table. Proficient in Python, Java, R, and JavaScript, I specialise in 
            software development, data analysis, model training, and deploying 
            innovative solutions for real-world challenges. Bridging the gap between 
            front-end and back-end development, I leverage machine learning 
            techniques to enhance software functionality. Committed to continuous 
            learning and collaboration, I bring a results-oriented approach to every 
            project.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
