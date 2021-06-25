import React from "react";
import { extracurriculars } from "../data/extracurriculars";

const Extracurriculars = () => {
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
                        Extracurriculars
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="mt-10">
                      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {extracurriculars.map((extracurricular) => (
                          <div key={extracurricular.id} className="relative">
                            <dt>
                              {" "}
                              <p className="ml-6 text-lg leading-6 font-medium text-teal-800 font-title">
                                <a
                                  href={extracurricular.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {extracurricular.name}
                                </a>
                              </p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-500">
                              {extracurricular.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
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

export default Extracurriculars;
