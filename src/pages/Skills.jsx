import React from "react";
import Skill from "../components/Skill";
import Tool from "../components/Tool";

const Skills = () => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
        data-todo-x-data=""
        data-todo-x-init="$el.focus()"
      >
        <div className="py-12 xl:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl">
            <div
              className="xl:col-span-2 xl:pr-8

             xl:border-gray-200"
            >
              <div>
                <div>
                  <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Skills & Tools
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
                    {/* Skills */}
                    <div className="px-2 flex justify-center sm:px-3 lg:px-4 py-8">
                      <div className="min-w-0">
                        <nav aria-label="Progress">
                          <ol className="overflow-hidden">
                            <Skill />
                          </ol>
                        </nav>
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="px-2 flex sm:px-3 lg:px-4 py-8">
                      <ul className="space-y-4">
                        <Tool />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
