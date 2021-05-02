import React from "react";

const features = [
  {
    name: "IETE",
    description:
      "I was a part of the Institution of Electronics and Telecommunication Engineers(IETE) chapter of my college for 4 years. Over the years we held various workshops, bootcamps, competitions, and events like the Data Science Bootcamp, Web Development Workshop, Poster Competition, and Technical Mock Interview. In the latter 2 years I had also held the post of Treasurer and Chairperson.",
    url: "https://www.instagram.com/iete_kjsieit/",
  },
  {
    name: "NSS",
    description:
      "The National Service Scheme(NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It was a two years experience of partaking and later organising as the Assistant leader, various events whose sole purpose was community service. In these years I have organised multiple Blood Donation drives, organised street plays to spread Awareness on various social issues, painted Railway station walls and held Medical camps in villages.",
    url: "https://www.instagram.com/nss__kjsieit/",
  },
  {
    name: "LEO",
    description:
      "LEO is the youth organisation of Lions Clubs International. It focuses on social service, fellowship and networking events. I have been a part of this organisation since the last three years and am currently the Past President of Leo Club of Walkeshwar, President of Leo District 3231 A1 and Chief Website Officer of Leo Multiple 3231, India. As the District President my role is to ensure the proper functioning of the 9 clubs laying in the South Mumbai region.",
    url: "https://www.instagram.com/leodistrict3231a1/",
  },
  {
    name: "AURA",
    description:
      "I was a part of the team that created the college magazine, AURA. I have been a Designer and later a Content Writer and Editor. I also love to paint and have continued to do so as a hobby over the years.",
    url: "https://www.instagram.com/designer.thou.25/",
  },
];

const Extracurriculars = () => {
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
                        Extracurriculars
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="mt-10">
                      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative">
                            <dt>
                              {" "}
                              <p className="ml-6 text-lg leading-6 font-medium text-teal-800 font-title">
                                <a
                                  href={feature.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {feature.name}
                                </a>
                              </p>
                            </dt>
                            <dd className="mt-2 ml-12 text-base text-gray-500">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
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

export default Extracurriculars;
