import React from "react";
import { skills } from "../data/skills";

const Skill = () => {
  return (
    <>
      {skills.map((skill) => {
        if (skill.status === "completed") {
          return (
            <li className="relative pb-10" key={skill.id}>
              <div
                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                aria-hidden="true"
              ></div>
              <a
                href={skill.url}
                className="relative flex items-start group"
                data-todo-x-description="Complete Step"
                target="_blank"
                rel="noreferrer"
              >
                <span className="h-9 flex items-center">
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-teal-500 rounded-full group-hover:bg-teal-700">
                    <svg
                      className="w-5 h-5 text-white"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    <ol>
                      {skill.courses.map((course) => (
                        <li key={course.id}>- {course.name}.</li>
                      ))}
                    </ol>
                  </span>
                </span>
              </a>
            </li>
          );
        } else if (skill.status === "ongoing") {
          return (
            <li className="relative pb-10" key={skill.id}>
              <div
                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                aria-hidden="true"
              ></div>
              <a
                href={skill.url}
                target="_blank"
                className="relative flex items-start group"
                aria-current="step"
                data-todo-x-description="Current Step"
                rel="noreferrer"
              >
                <span className="h-9 flex items-center" aria-hidden="true">
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-teal-500 rounded-full">
                    <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                  </span>
                </span>
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-500">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    <ol>
                      {skill.courses.map((course) => (
                        <li key={course.id}>- {course.name}.</li>
                      ))}
                    </ol>
                  </span>
                </span>
              </a>
            </li>
          );
        } else {
          return (
            <li className="relative pb-10" key={skill.id}>
              <a
                href={skill.url}
                className="relative flex items-start group"
                data-todo-x-description="Upcoming Step"
                target="_blank"
                rel="noreferrer"
              >
                <span className="h-9 flex items-center" aria-hidden="true">
                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                  </span>
                </span>
                <span className="ml-4 min-w-0 flex flex-col">
                  <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    <ol>
                      {skill.courses.map((course) => (
                        <li key={course.id}>- {course.name}.</li>
                      ))}
                    </ol>
                  </span>
                </span>
              </a>
            </li>
          );
        }
      })}
    </>
  );
};

export default Skill;
