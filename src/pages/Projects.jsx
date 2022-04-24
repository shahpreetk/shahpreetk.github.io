// @ts-check

import {projectData} from '../data/ProjectData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Projects = () => {
  return (
    <>
      <main className="grid col-start-6">
        <div className="py-6 ml-3 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-2">
              <div className="mt-6 mr-2 mx-auto grid gap-5 md:grid-cols-1 lg:grid-cols-3 lg:max-w-none">
                {projectData.map((project) => (
                  <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className={classNames(
                      (project.id) % 2 === 0 ? 'bg-slate-50' : 'bg-violet-50', "flex-1 p-6 flex flex-col justify-between"
                    )}>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <a href={project.category.categoryHref} className="hover:underline">
                            {project.category.name}
                          </a>
                        </p>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                          <p className="mt-3 text-base text-gray-600 whitespace-pre-wrap">{project.description}</p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                        </div>
                        <div>
                          <p className="text-sm font-medium text-indigo-600">
                            <a href={project.achievement.achievementHref} className="hover:underline">
                              {project.achievement.name}
                            </a>
                          </p>
                          <div className="flex text-sm text-gray-600 whitespace-pre-line">
                            <p>{project.projectAchievements}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;