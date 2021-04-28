import React from "react";

const About = () => {
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
                        About Me
                      </h1>
                      <p className="mt-2 text-sm text-gray-500">
                        Student . Bachelors of Engineering
                      </p>
                    </div>
                  </div>

                  <div className="mx-auto pt-8 pb-4 max-w-7xl lg:py-8">
                    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                      <div className="lg:col-span-2">
                        <ul
                          className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                          data-todo-x-max="1"
                        >
                          <li className="sm:py-8">
                            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                <img
                                  className="object-cover shadow-lg rounded-lg"
                                  src="/images/preet-photo.jpg"
                                  alt="Preet"
                                />
                              </div>
                              <div className="sm:col-span-2">
                                <div className="space-y-4">
                                  <div className="text-lg leading-6 font-medium space-y-1">
                                    <h3>Preet Shah</h3>
                                    <p className="text-indigo-600">
                                      Web Developer
                                    </p>
                                  </div>
                                  <div className="text-lg">
                                    <p className="text-gray-500">
                                      A KittyLover, Painter, Dancer and aspiring
                                      Fullstack Web Developer
                                    </p>
                                  </div>
                                  <ul className="flex space-x-5">
                                    <li>
                                      <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/shahpreetk/"
                                        className="text-gray-400 hover:text-blue-600"
                                        rel="noreferrer"
                                      >
                                        <span className="sr-only">
                                          LinkedIn
                                        </span>
                                        <svg
                                          className="w-5 h-5"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                            clipRule="evenodd"
                                          ></path>
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        target="_blank"
                                        href="https://github.com/shahpreetk"
                                        className="text-gray-400 hover:text-black"
                                        rel="noreferrer"
                                      >
                                        <span className="sr-only">GitHub</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          fill="currentColor"
                                          height="20"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        target="_blank"
                                        href="https://www.instagram.com/shahpreetk/"
                                        className="text-gray-400 hover:text-fuchsia-800"
                                        rel="noreferrer"
                                      >
                                        <span className="sr-only">
                                          Instagram
                                        </span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        target="_blank"
                                        href="https://github.com/shahpreetk"
                                        className="text-gray-400 hover:text-orange-600"
                                        rel="noreferrer"
                                      >
                                        <span className="sr-only">Reddit</span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="currentColor"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                        >
                                          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        target="_blank"
                                        href="https://twitter.com/shahpreetk"
                                        className="text-gray-400 hover:text-blue-500"
                                        rel="noreferrer"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="w-5 h-5"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          aria-hidden="true"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="py-2 xl:pt-6 xl:pb-0">
                    <h2 className="sr-only">Description</h2>
                    <div className="prose max-w-none">
                      <p>
                        Electronics and Telecommunications Student at KJSIEIT,
                        I'm interested in Web Development. I'm a budding Full
                        Stack Web Developer and well versed with MERN (MongoDB,
                        Express, React, Node) Stack. Currently I am
                        experimenting with JAM Stack. I have also been a part of
                        the Major League Hacking Fellowship Program in the Fall
                        2020 Batch.
                      </p>
                      <ul>
                        <li>
                          I have also held positions of responsibility like
                          Chairperson of IETE and Leader of NSS at KJSIEIT
                          College. I also love to carry out social activities
                          and am the District President of Leo District 3231 A1,
                          India and the Chief Website Officer of Leo Multiple
                          3231, India.
                        </li>
                        <li>
                          My love for colour doesn't let me forget my passion
                          for Painting.
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

export default About;
