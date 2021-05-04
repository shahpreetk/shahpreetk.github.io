import React from "react";

const CuratedLearning = () => {
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
                        curatedLearning
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
                            curatedLearning is a personally curated list of
                            learning paths for individuals who want to get
                            started but are overwhelmed by the huge amount of
                            resources that are available.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://curatedlearning.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://curatedlearning.netlify.app/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            When I started out with coding I had no clue about
                            what I would be interested in or would like to
                            build. If not for the help of my seniors and friends
                            I would be clueless but I was lucky.
                            <br />
                            So since maybe not everyone would have people around
                            them in the tech background I thought of making this
                            site to help them.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Currently, the site is only made using React but due
                            to code redundancy I plan on moving the project to
                            MERN stack in the future. The lists are still in
                            development phase and new resources are constantly
                            being added.
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

export default CuratedLearning;
