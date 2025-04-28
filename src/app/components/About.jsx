"use client";
import React, { useState, useTransition } from "react";
import { Roboto } from 'next/font/google';
import Image from "next/image";
import TabButton from "./TabButton";

import AwsIcon from "../../../public/images/skills/aws-icon.svg";
import BootstrapIcon from "../../../public/images/skills/bootstrap-icon.svg";
import CloudflareIcon from "../../../public/images/skills/cloudflare-icon.svg";
import Css3Icon from "../../../public/images/skills/css3-icon.svg";
import DjangoIcon from "../../../public/images/skills/django-icon.svg";
import ExpoIcon from "../../../public/images/skills/expo-icon.svg";
import ExpressIcon from "../../../public/images/skills/express-icon.svg";
import FirebaseIcon from "../../../public/images/skills/firebase-icon.svg";
import GcpIcon from "../../../public/images/skills/gcp-icon.svg";
import GitIcon from "../../../public/images/skills/git-icon.svg";
import GraphqlIcon from "../../../public/images/skills/graphql-icon.svg";
import HtmlIcon from "../../../public/images/skills/html-icon.svg";
import JavaIcon from "../../../public/images/skills/java-icon.svg";
import JavascriptIcon from "../../../public/images/skills/javascript-icon.svg";
import LinuxIcon from "../../../public/images/skills/linux-icon.svg";
import MaterialUIIcon from "../../../public/images/skills/material-ui-icon.svg";
import MongodbIcon from "../../../public/images/skills/mongodb-icon.svg";
import MysqlIcon from "../../../public/images/skills/mysql-icon.svg";
import NextJsIcon from "../../../public/images/skills/next-js-icon.svg";
import NodeJsIcon from "../../../public/images/skills/nodejs-icon.svg";
import NumpyIcon from "../../../public/images/skills/numpy-icon.svg";
import OctaveIcon from "../../../public/images/skills/octave-icon.svg";
import PandasIcon from "../../../public/images/skills/pandas-icon.svg";
import PostgresqlIcon from "../../../public/images/skills/postgresql-icon.svg";
import PythonIcon from "../../../public/images/skills/python-icon.svg";
import RProjectIcon from "../../../public/images/skills/r-project-icon.svg";
import ReactIcon from "../../../public/images/skills/react-icon.svg";
import ReactRouterIcon from "../../../public/images/skills/react-router-icon.svg";
import ReduxIcon from "../../../public/images/skills/redux-icon.svg";
import ScikitLearnIcon from "../../../public/images/skills/scikitlearn-icon.svg";
import TableauIcon from "../../../public/images/skills/tableau-icon.svg";
import TailwindIcon from "../../../public/images/skills/tailwind-icon.svg";
import TensorflowIcon from "../../../public/images/skills/tensorflow-icon.svg";
import TypescriptIcon from "../../../public/images/skills/typescript-icon.svg";
import VercelIcon from "../../../public/images/skills/vercel-icon.svg";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${roboto.className} max-h-[520px] pr-4 overflow-y-auto scroll-smooth scrollbar scrollbar-thin scrollbar-thumb-purple-800 scrollbar-track-transparent scrollbar-rounded-md`}
      >
        {[{ name: "Java", icon: JavaIcon },
          { name: "Python", icon: PythonIcon },
          { name: "JavaScript", icon: JavascriptIcon },
          { name: "TypeScript", icon: TypescriptIcon },
          { name: "R", icon: RProjectIcon },
          { name: "Octave", icon: OctaveIcon },
          { name: "HTML", icon: HtmlIcon },
          { name: "CSS", icon: Css3Icon },
          { name: "Bootstrap", icon: BootstrapIcon },
          { name: "Tailwind CSS", icon: TailwindIcon },
          { name: "React", icon: ReactIcon },
          { name: "React Router", icon: ReactRouterIcon },
          { name: "Redux", icon: ReduxIcon },
          { name: "Next.js", icon: NextJsIcon },
          { name: "Material UI", icon: MaterialUIIcon },
          { name: "React Native", icon: ReactIcon },
          { name: "Expo", icon: ExpoIcon },
          { name: "Node.js", icon: NodeJsIcon },
          { name: "Express.js", icon: ExpressIcon },
          { name: "Django", icon: DjangoIcon },
          { name: "GraphQL", icon: GraphqlIcon },
          { name: "MySQL", icon: MysqlIcon },
          { name: "PostgreSQL", icon: PostgresqlIcon },
          { name: "MongoDB", icon: MongodbIcon },
          { name: "Firebase", icon: FirebaseIcon },
          { name: "Pandas", icon: PandasIcon },
          { name: "NumPy", icon: NumpyIcon },
          { name: "Scikit-learn", icon: ScikitLearnIcon },
          { name: "TensorFlow", icon: TensorflowIcon },
          { name: "Tableau", icon: TableauIcon },
          { name: "Git", icon: GitIcon },
          { name: "Linux", icon: LinuxIcon },
          { name: "AWS", icon: AwsIcon },
          { name: "Google Cloud", icon: GcpIcon },
          { name: "Vercel", icon: VercelIcon },
          { name: "Cloudflare", icon: CloudflareIcon },
        ].map((skill, index) => (
          <div key={index} className="bg-zinc-950 shadow-md rounded-lg p-4 flex flex-col items-center mb-4 border border-purple-800">
            <Image src={skill.icon} alt={`${skill.name} Icon - ars portfolio apoorv sharma space software developer`} className="m-5 text-white fill-current" width={48} height={48} />
            <span className="text-center text-white text-sm sm:text-base md:text-md lg:text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className={`bg-zinc-950 shadow-md rounded-lg p-6 border border-purple-800 mb-4 ${roboto.className}`}>
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">BS, Computer Science</h3>
          <span className="text-xs text-gray-500">Jun 2021 - May 2024</span>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-md">Thakur College of Science and Commerce</span>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <div className={`bg-zinc-950 shadow-md rounded-lg p-6 border border-purple-800 mb-4 ${roboto.className}`}>
          <div className="flex flex-wrap justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">Nest</h3>
            <span className="text-xs text-gray-500">Jun 2024 - Present</span>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-md">Mobile Developer</span>
            <span className="text-xs text-gray-500">Full Time</span>
          </div>
        </div>
        <div className={`bg-zinc-950 shadow-md rounded-lg p-6 border border-purple-800 mb-4 ${roboto.className}`}>
          <div className="flex flex-wrap justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">Asynchron</h3>
            <span className="text-xs text-gray-500">Nov 2023 - Jan 2024</span>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-md">Full Stack Developer</span>
            <span className="text-xs text-gray-500">Internship</span>
          </div>
        </div>
        <div className={`bg-zinc-950 shadow-md rounded-lg p-6 border border-purple-800 mb-4 ${roboto.className}`}>
          <div className="flex flex-wrap justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">SDAC Infotech</h3>
            <span className="text-xs text-gray-500">Apr 2023 - Jun 2023</span>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-md">Full Stack Developer</span>
            <span className="text-xs text-gray-500">Internship</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className={`bg-zinc-950 shadow-md rounded-lg p-6 border border-purple-800 mb-4 ${roboto.className}`}>
        <div className="flex flex-wrap justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">Machine Learning</h3>
          <span className="text-xs text-gray-500">Issued Feb 2024</span>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <span className="text-md">Stanford University</span>
        </div>
      </div>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="z-0" src="/images/about.png" alt="about - ars portfolio apoorv sharma space software developer" width={500} height={500} />
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a detail-oriented Software Developer with a creative approach and a 
            strong problem-solving ability. My expertise spans a wide range of 
            technologies, allowing me to build innovative solutions across web 
            applications, mobile applications, and in the fields of data science and machine 
            learning. I enjoy tackling challenges head-on and turning ideas into practical, 
            user-friendly solutions. Committed to continuous learning and collaboration, 
            I bring a results-oriented approach to every project.
          </p>
          <div className="flex flex-row xl:gap-5 flex-wrap justify-start mt-8">
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
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          <section id="projects"></section>
        </div>
      </div>
    </section>
  );
};

export default About;
