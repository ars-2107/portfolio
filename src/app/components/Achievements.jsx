"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "3",
    postfix: "",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
  },
  {
    metric: "Certificates",
    value: "1",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-16 xl:gap-16 sm:py-8 md:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-4 px-8 sm:py-2 sm:px-4 md:py-4 md:px-8 lg:py-8 lg:px-16">
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center my-4 mx-4 min-w-[30px]"
              >
                <h2 className="text-white text-3xl sm:text-2xl md:text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-3xl sm:text-2xl md:text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
      <section id="about"></section>
    </div>
  );
};

export default Achievements;
