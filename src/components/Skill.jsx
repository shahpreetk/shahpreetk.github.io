import React from "react";
import { skills } from "../data/skills";

const Skill = () => {
  return (
    <>
      {skills.map((skill) => (
        <li className="relative pb-10" key={skill.id}>
          {/* <div
                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                aria-hidden="true"
              ></div> */}
          <div
            className={`-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full ${
              skill.status === "completed"
                ? `bg-teal-500`
                : skill.status === "ongoing"
                ? `bg-gray-300`
                : null
            }`}
          ></div>
          <a
            href={skill.url}
            className="relative flex items-start group"
            // data-todo-x-description="Complete Step"
            data-todo-x-description={
              skill.status === "completed"
                ? "Complete Step"
                : skill.status === "ongoing"
                ? "Current Step"
                : "Upcoming Step"
            }
            target="_blank"
            rel="noreferrer"
          >
            <span className="h-9 flex items-center" aria-hidden="true">
              <span
                className={`relative z-10 w-8 h-8 flex items-center rounded-full justify-center
                ${
                  skill.status === "completed"
                    ? `bg-teal-500 group-hover:bg-teal-700`
                    : skill.status === "ongoing"
                    ? `bg-white border-2 border-teal-500`
                    : `bg-white border-2 border-gray-300  group-hover:border-gray-400`
                }`}
              >
                {skill.status === "completed" ? (
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
                ) : skill.status === "ongoing" ? (
                  <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                ) : (
                  <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                )}
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
      ))}
    </>
  );
};

export default Skill;
