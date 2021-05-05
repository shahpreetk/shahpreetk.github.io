import React from "react";

const SmartBrain = () => {
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
                        SmartBrain
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
                            SmartBrain is a project where-in you can paste the
                            URL of any image and the system would detect any
                            faces in the image and give it back to you.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://safe-brook-69703.herokuapp.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://safe-brook-69703.herokuapp.com/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            SmartBrain was my first MERN stack project made in a
                            course by Andrei Neagoie.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            The sight is made using the MERN stack. It has an
                            authentication system and counts the number of times
                            the user has pasted a URL to detect faces. It
                            detects faces by making an API call to Clarifai. We
                            then map out the coordinates given back as a
                            repsonse and provide the user the result.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            This project was my first step into Fullstack Web
                            Development.
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

export default SmartBrain;
