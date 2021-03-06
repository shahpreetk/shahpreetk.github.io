import React from "react";

const Inventostocks = () => {
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
                      <h1 className="text-2xl font-bold font-title text-gray-900">
                        Inventostocks
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                      <dl className="space-y-12" data-todo-x-max="1">
                        <div>
                          <dt className="text-lg leading-6 font-medium font-title text-teal-800">
                            What is it?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Inventostocks is a platform to save all your shares
                            inventory. You can save buying as well as selling
                            information of all your shares on this site.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://inventostocks.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://inventostocks.netlify.app/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Inventostocks was made in order to help managing
                            shares better. Many a times people buy shares from
                            multiple platforms like a digital application or
                            from a broker. So in such cases keeping track of all
                            shares becomes a hassle in the long run.
                            Inventostocks prevents that. It allows you to add a
                            share and edits its information so as to know all
                            you need to about all your shares at one place.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            The site is built using the MERN stack but is
                            currently still in the development phase.
                          </dd>
                        </div>

                        {/* <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas cupiditate laboriosam fugiat. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quas
                            cupiditate laboriosam fugiat.
                          </dd>
                        </div> */}
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

export default Inventostocks;
