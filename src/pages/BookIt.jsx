import React from "react";

const BookIt = () => {
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
                        BookIt
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
                            BookIt is aproject made for the Final year of my
                            Bachelors of Engineering degree. It is an online
                            system made using MERN stack to book the Auditorium
                            or Tuf of K. J. Somaiya Institute of Engineering and
                            Information Technology.
                            <p className="mt-2">
                              You can find the site on{" "}
                              <a
                                className="text-teal-800"
                                href="https://kjsieit-onlinebooking.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://kjsieit-onlinebooking.netlify.app/
                              </a>
                            </p>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Why was it made?
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            Currently, we are surrounded by applications like
                            Zomato, Swiggy, Flipkart, etc., and have a lot of
                            these apps even installed on our phones. So the
                            thought behind this system was to make something
                            that would help teachers, students and even
                            outsiders. Now with the help of this system, we can
                            book our college Auditorium and Turf from anywhere,
                            without being present in college and without needing
                            to approach the administration too.
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
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
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
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

export default BookIt;
