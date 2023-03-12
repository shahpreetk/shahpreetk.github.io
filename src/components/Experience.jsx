// @ts-check
import React from "react";

const BASE_COMPANY_LOGO_PATH = "/images/companylogos";

const experiences = [
  {
    name: 'JP Morgan Chase & Co.',
    description:
      `[Sept 2022 - Present] Currently working as a Full Stack developer.
Primary stack: Java, Spring Boot, React, react-bootstrap, GOS DB, Jenkins, Bitbucket.

[July 2022 - Sept 2022] Graduated from the Tech Connect program.
Primary stack: Java, Spring Boot, React`,
    companyLogo: `${BASE_COMPANY_LOGO_PATH}/jpmc.jpg`,
  },
  {
    name: 'Major League Hacking (MLH)',
    description:
      `For prospective technologists, the MLH Fellowship offered a twelve week internship programme.
The Explorer Track required us to collaborate in small groups on a series of short hackathon sprints in order to expand our portfolio of personal projects and experiment with new technologies.
Each sprint had a theme that encouraged us to try out new tech-stacks and pursue our passions.
The themes were - Education, Gaming, ML, Productivity Tool, and Social Good.`,
    companyLogo: `${BASE_COMPANY_LOGO_PATH}/mlh.jpg`,
  },
  {
    name: 'Hackathons',
    description:
      `Participated in multiple hackathons hosted by Major League Hacking over the years.

Won the third place overall: FuTourist - https://devpost.com/software/futourist

Frontend GitHub: https://shahpreetk-ncl.github.io/futourist/`,
    companyLogo: `${BASE_COMPANY_LOGO_PATH}/devpost.jpg`,
  },
  {
    name: 'Hellbent Software & Educational Services LLP',
    description:
      `Internship
Prototyping, Designing, Developing, and Testing Apps and Websites with database management was expected from me.

Freelance
Designed and later developed an Order Management System(with Chat functionality) using HTML, CSS, JS
      `,
    companyLogo: `${BASE_COMPANY_LOGO_PATH}/hellbent.jpg`,
  },
];

const Experience = () => {
  return (
    <>
      <div className="py-4 bg-white">
        <div className="mx-auto">
          <div className="lg:text-left">
            <h1 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Experience
            </h1>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {experiences.map((eachCompany) => (
                <div key={eachCompany.name} className="relative">
                  <dt>
                    <div className="sm:absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-200 text-white border-2 border-slate-200">
                      <img loading="lazy" className="h-11 w-11 rounded-md" src={eachCompany.companyLogo} alt={eachCompany.name} />
                    </div>
                    <p className="mt-1 sm:ml-16 text-lg leading-6 font-medium text-gray-900">{eachCompany.name}</p>
                  </dt>
                  <dd className="mt-1 sm:ml-16 sm:mt-2 text-base text-gray-500 whitespace-pre-wrap">{eachCompany.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;