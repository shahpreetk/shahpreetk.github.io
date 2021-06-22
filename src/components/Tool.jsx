import React from "react";
import { tools } from "../data/tools";
const Tool = () => {
  return (
    <>
      {tools.map((tool) => (
        <li className="flex space-x-3" key={tool.id}>
          <svg
            className="flex-shrink-0 h-6 w-6 text-teal-400"
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
          <span className="text-md text-gray-600">{tool.name}</span>
        </li>
      ))}
    </>
  );
};

export default Tool;
