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
                        DJ Events - Next.js Project
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
                            DJ Events is a platform to find information of all
                            the DJ and musical events happening around you.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://djeventsfrontend-preet.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://djeventsfrontend-preet.vercel.app/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            DJ Events was my first Next.js project made while
                            following "Next.js Dev to Development" by Brad
                            Traversy on Udemy.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            The Process
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            The site is built using Next.js along with a CMS on
                            Strapi and photos on Cloudinary.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            This was my first Next.js project. Apart from SSR in
                            Next.js, I also learnt how to use a CMS like Strapi
                            and how using Cloudinary for uploading photographs
                            allows quick access to the uploaded photo in various
                            resolutions.
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

export default Inventostocks;
