import React from "react";

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
                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://www.adobe.com/products/xd/features.html"
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
                                    Adobe XD
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li> - Adobe XD Basics Course, Udemy.</li>
                                      <li>
                                        - Front-End Web UI Frameworks and Tools:
                                        Bootstrap 4, Coursera.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
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
                                    HTML & CSS
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - Responsive Website Basics: Code with
                                        HTML, CSS, and JavaScript, Coursera.
                                      </li>
                                      <li>- Interneting is Hard</li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
                                    JavaScript
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - Beginner Javascript, Zack Freedman,
                                        Udemy.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-teal-500"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://reactjs.org/"
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
                                    React
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - React Developer in 2020, Andrei
                                        Neagoie, ZTM.
                                      </li>
                                      <li>
                                        - Front-End Web Development with React,
                                        Coursera.
                                      </li>
                                      <li>
                                        - Web Developer Bootcamp, Colt Steele,
                                        Udemy.
                                      </li>
                                      <li>
                                        {" "}
                                        - React Front to Back, Brad Traversy.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://nextjs.org/"
                                target="_blank"
                                className="relative flex items-start group"
                                aria-current="step"
                                data-todo-x-description="Current Step"
                                rel="noreferrer"
                              >
                                <span
                                  className="h-9 flex items-center"
                                  aria-hidden="true"
                                >
                                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-teal-500 rounded-full">
                                    <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                                  </span>
                                </span>
                                <span className="ml-4 min-w-0 flex flex-col">
                                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-500">
                                    Next.js
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - Next.js Dev to Development, Brad
                                        Traversy.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://nodejs.org/en/"
                                target="_blank"
                                className="relative flex items-start group"
                                aria-current="step"
                                data-todo-x-description="Current Step"
                                rel="noreferrer"
                              >
                                <span
                                  className="h-9 flex items-center"
                                  aria-hidden="true"
                                >
                                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-teal-500 rounded-full">
                                    <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                                  </span>
                                </span>
                                <span className="ml-4 min-w-0 flex flex-col">
                                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-500">
                                    NodeJS
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - NodeJS Developer Course, Andrew Mead.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative pb-10">
                              <div
                                className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                aria-hidden="true"
                              ></div>
                              <a
                                href="https://www.mongodb.com/2"
                                className="relative flex items-start group"
                                aria-current="step"
                                data-todo-x-description="Current Step"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span
                                  className="h-9 flex items-center"
                                  aria-hidden="true"
                                >
                                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-teal-500 rounded-full">
                                    <span className="h-2.5 w-2.5 bg-teal-500 rounded-full"></span>
                                  </span>
                                </span>
                                <span className="ml-4 min-w-0 flex flex-col">
                                  <span className="text-xs font-semibold tracking-wide uppercase text-teal-500">
                                    MongoDB
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>
                                        - NodeJS Developer Course, Andrew Mead.
                                      </li>
                                      <li>
                                        - Web Developer Bootcamp, Colt Steele,
                                        Udemy.
                                      </li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>

                            <li className="relative ">
                              <a
                                href="https://reactnative.dev/"
                                className="relative flex items-start group"
                                data-todo-x-description="Upcoming Step"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span
                                  className="h-9 flex items-center"
                                  aria-hidden="true"
                                >
                                  <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                    <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                                  </span>
                                </span>
                                <span className="ml-4 min-w-0 flex flex-col">
                                  <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                                    React Native
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    <ol>
                                      <li>- React Native, Code with Mosh.</li>
                                    </ol>
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="px-2 flex sm:px-3 lg:px-4 py-8">
                      <ul className="space-y-4">
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">
                            Visual Studio Code
                          </span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Git</span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">
                            Bootstrap
                          </span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">
                            Tailwind CSS
                          </span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">
                            Firebase
                          </span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Postman</span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Netlify</span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Heroku</span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Surge</span>
                        </li>
                        <li className="flex space-x-3">
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
                          <span className="text-md text-gray-600">Vercel</span>
                        </li>
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
