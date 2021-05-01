import React from "react";

const LearnfromHome = () => {
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
                        Learn from Home
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                      <dl className="space-y-12" data-todo-x-max="1">
                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            What is it?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Learn From Home is an initiative to provide all the
                            free and temporarily-free resources available for
                            work/study/entertainment during the COVID-19
                            outbreak, under one roof.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://learn-from-home.herokuapp.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://learn-from-home.herokuapp.com/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            During the COVID-19 pandemic, learning, work and
                            education had to be shifted online. So, this project
                            was made in order to make accessing free online
                            available resources easier on one single site.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            The very first version of the Learn from Home
                            website was made using HTML, CSS and an API to add
                            random images in the cards. Since, there was a lot
                            of redundant code, the site was then shifted to
                            React and a Search functionality was added to
                            improve user experience..
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            <ul>
                              <li>It was my first unique React project.</li>
                              <li>
                                The site was shared onto various social media
                                platforms and in the span of 4 months had
                                received 5000+ views.
                              </li>
                            </ul>
                          </dd>
                        </div>
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

export default LearnfromHome;
