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
                            As this was my very first self-made complete MERN
                            stack project there were quite a few obstacles faced
                            while building it. One of the most difficult choice
                            I had to make was on the tech stack that I wanted to
                            use for the project. I had started with the idea of
                            using MERN stack but since I did not know much I
                            shifted my plan to using Firebase Functions and
                            Firestore. But I still wished to learn something new
                            while building this project so then thought, why not
                            use Amazon Web Services.
                            <br />
                            Once I shifted to AWS I realised that it was not
                            very easy to learn. It took me 2 tries to setup AWS
                            incognito for Authentication and after multiple
                            tries to setup REST API with AWS functions and
                            Storage bucket, I gave up. By then I had done a few
                            courses on Nodejs, one by Andrew Mead and had a
                            decent understanding of how I could build the
                            project using MERN stack. So finally, I shifted back
                            to using the MERN stack just this time it was
                            different as I actually was successful in building
                            the system.
                            <br />
                            <ul>
                              <li>
                                <span className="text-violet-700 font-bold">
                                  UI
                                </span>{" "}
                                - First, we sketched the wireframe of the
                                website after which the prototype and designing
                                were done on Adobe XD.
                              </li>{" "}
                              <li>
                                <span className="text-violet-700 font-bold">
                                  Frontend
                                </span>{" "}
                                - The frontend of this online booking system is
                                made using the Reactjs UI library. It helps in
                                making a single-page application (SPA) that
                                ensures fast rendering. React-Bootstrap with
                                Styled Components has been used for the styling
                                of the web app. To give the user a feeling of
                                content being loaded, we show a loader using
                                react-loading-skeleton after which the backend
                                sends the data using Axios. The state management
                                of the cart has been done using
                                use-shopping-cart and the checkout is managed by
                                Stripe payment system.
                              </li>{" "}
                              <li>
                                <span className="text-violet-700 font-bold">
                                  Backend
                                </span>{" "}
                                - The API system is made using Express, a
                                lightweight Nodejs library. The data is saved on
                                a NoSQL MongoDB database. To welcome the user
                                after signup, we send an email using the
                                Sendgrid service. For the security and privacy
                                of the user, we use bcrypt to hash the user’s
                                password in the database, and session
                                authentication is done via JSON web tokens.
                              </li>
                            </ul>
                          </dd>
                        </div>

                        <div>
                          <dt className="text-lg leading-6 font-medium text-teal-800 font-title">
                            Achievements
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            A paper has been published on the same in the
                            International Journal for Research in Applied
                            Science and Engineering Technology Volume 9, Issue
                            IV, April 2021.
                            <br />
                            You can find the same at{" "}
                            <a
                              href="https://doi.org/10.22214/ijraset.2021.33974"
                              className="text-teal-800 "
                              target="_blank"
                              rel="noreferrer"
                            >
                              https://doi.org/10.22214/ijraset.2021.33974
                            </a>
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
