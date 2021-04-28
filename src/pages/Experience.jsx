import React from "react";

const Experience = () => {
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
                        Experience
                      </h1>
                    </div>
                  </div>

                  <main>
                    {/* Side-by-side grid */}
                    <div className="bg-white">
                      <div className="max-w-md mx-auto py-8 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="divide-y divide-warm-gray-200">
                          <section
                            className="lg:grid lg:grid-cols-2 lg:gap-8 pb-12"
                            aria-labelledby="contactHeading"
                          >
                            <h2
                              id="contactHeading"
                              className="text-lg font-extrabold font-title text-warm-gray-900 sm:text-2xl"
                            >
                              Hellbent Software & Educational Services LLP
                            </h2>
                            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-1 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-1">
                              <div>
                                <h3 className="text-lg font-medium text-teal-800">
                                  Internship
                                </h3>
                                <dl className="mt-2 text-base text-warm-gray-500">
                                  <div>
                                    <dd>
                                      Prototyping, Designing, Developing, and
                                      Testing Apps and Websites with database
                                      management was expected from me.
                                    </dd>
                                  </div>
                                </dl>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-teal-800">
                                  Freelance
                                </h3>
                                <dl className="mt-2 text-base text-warm-gray-500">
                                  <div>
                                    <dd>
                                      Designed and later developed an Order
                                      Management System(with Chat functionality)
                                      using HTML, CSS, JS
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </section>
                          <section
                            className="lg:grid lg:grid-cols-2 lg:gap-8 py-12"
                            aria-labelledby="contactHeading"
                          >
                            <h2
                              id="contactHeading"
                              className="text-lg font-extrabold font-title text-warm-gray-900 sm:text-2xl"
                            >
                              Major League Hacking (MLH) Fellowship
                            </h2>
                            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-1 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-1">
                              <div>
                                <h3 className="text-lg font-medium text-teal-800">
                                  Program
                                </h3>
                                <dl className="mt-2 text-base text-warm-gray-500">
                                  <div>
                                    <dd>
                                      The MLH Fellowship was a 12 week
                                      internship alternative for aspiring
                                      technologists. On the Explorer Track we
                                      were to build out our portfolio of
                                      personal projects & experiment with new
                                      technologies by collaborating in small
                                      groups on a series of short hackathon
                                      sprints. Each sprint had themes that
                                      challenged us to experiment with new
                                      technologies and explore our interests.
                                    </dd>
                                  </div>
                                </dl>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium text-teal-800">
                                  Achievements
                                </h3>
                                <dl className="mt-2 text-base text-warm-gray-500">
                                  <div>
                                    <dd>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Aenean pharetra gravida
                                      dapibus. In sodales accumsan ante nec
                                      lobortis. Proin sodales est a tortor
                                      blandit blandit. Nullam vel tincidunt
                                      lectus, a porttitor elit. Sed nec
                                      consequat tellus, in viverra orci.
                                      Suspendisse posuere risus metus, in
                                      aliquam lacus ultricies in.
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </section>

                          <section
                            className="lg:grid lg:grid-cols-2 lg:gap-8 py-12"
                            aria-labelledby="contactHeading"
                          >
                            <h2
                              id="contactHeading"
                              className="text-lg font-extrabold font-title text-warm-gray-900 sm:text-2xl"
                            >
                              Hackathons
                            </h2>
                            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-1 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-1">
                              <div>
                                <h3 className="text-lg font-medium text-teal-800">
                                  Attended
                                </h3>
                                <dl className="mt-2 text-base text-warm-gray-500">
                                  <div>
                                    <dd>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Aenean pharetra gravida
                                      dapibus. In sodales accumsan ante nec
                                      lobortis. Proin sodales est a tortor
                                      blandit blandit. Nullam vel tincidunt
                                      lectus, a porttitor elit. Sed nec
                                      consequat tellus, in viverra orci.
                                      Suspendisse posuere risus metus, in
                                      aliquam lacus ultricies in.
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
