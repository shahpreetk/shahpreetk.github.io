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
                      <h1 className="text-2xl font-bold text-gray-900">
                        SmartBrain
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                      <dl className="space-y-12" data-todo-x-max="1">
                        <div>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            What is it?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas cupiditate laboriosam fugiat. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quas
                            cupiditate laboriosam fugiat.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas cupiditate laboriosam fugiat. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quas
                            cupiditate laboriosam fugiat.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas cupiditate laboriosam fugiat. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quas
                            cupiditate laboriosam fugiat.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas cupiditate laboriosam fugiat. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Quas
                            cupiditate laboriosam fugiat.
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
