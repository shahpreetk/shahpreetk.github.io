//@ts-check
import React from "react";

const skills = [
  {
    name: "Java",
    fluency: "Beginner",
  },
  {
    name: "Javascript",
    fluency: "Intermediate",
  },
  {
    name: "Python",
    fluency: "Beginner",
  },
  {
    name: "HTML & CSS",
    fluency: "Intermediate",
  },
  {
    name: "React.js",
    fluency: "Intermediate",
  },
  {
    name: "Next.js",
    fluency: "Beginner",
  },
  {
    name: "React Native",
    fluency: "Beginner",
  },
  {
    name: "Node.js",
    fluency: "Intermediate",
  },
  {
    name: "MySQL",
    fluency: "Intermediate",
  },
  {
    name: "MongoDB",
    fluency: "Intermediate",
  },
  {
    name: "PostgreSQL",
    fluency: "Beginner",
  },
  {
    name: "Firebase",
    fluency: "Beginner",
  },
  {
    name: "Version Control",
    fluency: "Git | GitHub",
  },
  {
    name: "Hosting",
    fluency: "Netlify | Heroku | Surge",
  },
  {
    name: "Designing",
    fluency: "Procreate | Figma | Adobe XD",
  },
  {
    name: "IDE",
    fluency: "VS Code | IntelliJ IDEA",
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Technology = () => {
  return (
    <>
      <main>
        <div className="grid md:grid-cols-1 md:grid-rows-1 shadow-sm">
          <div>
            <header className="bg-slate-200 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-t-xl">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-800 text-xl">Skills &amp; Tools</h2>
              </div>
            </header>
            <ul className="bg-slate-100 p-4 md:px-8 md:pt-6 md:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 text-md leading-6 rounded-b-xl">
              {skills.map((skill) => (
                <li key={skill.name} className="rounded-md p-3 bg-slate-50 ring-1 ring-slate-300 shadow-sm">
                  <dl className="grid sm:block md:grid-cols-1 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-2 xl:block grid-cols-1 grid-rows-2 items-center">
                    <div>
                      <dt className="sr-only">{skill.name}</dt>
                      <dd className="text-slate-700 font-semibold">
                        {skill.name}
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">{skill.fluency}</dt>
                      <dd className={classNames(
                        skill.fluency === "Beginner" ? 'text-indigo-500' : skill.fluency === "Intermediate" ? 'text-violet-700' : skill.fluency === "Fluent" ? 'text-purple-600' : 'text-orange-500',
                      )}>{skill.fluency}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Technology;