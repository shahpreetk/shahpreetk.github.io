// @ts-check

const allProjects = [
  {
    id: 1,
    title: 'BookIt',
    category: {
      name: 'Project Netlify Link',
      categoryHref: 'https://kjsieit-onlinebooking.netlify.app/'
    },
    description:
      `BookIt is a project I did in the final year of my Bachelor of Engineering degree. It is an online system for booking the Auditorium or Turf of the K. J. Somaiya Institute of Engineering and Information Technology, built using the MERN stack.`,
    projectAchievements: `Published a paper in "The International Journal for Research in Applied Science and Engineering Technology, Volume 9, Issue IV", April 2021.`,
    achievement: {
      name: 'Research Paper Link',
      achievementHref: 'https://doi.org/10.22214/ijraset.2021.33974/',
    },
  },
  {
    id: 2,
    title: 'DJ Events',
    category: {
      name: 'Project Vercel Link',
      categoryHref: 'https://djeventsfrontend-preet.vercel.app/'
    },
    description:
      `DJ Events was my first Next.js project made while following "Next.js Dev to Development" by Brad Traversy on Udemy. The site is built using Next.js along with a CMS on Strapi and photos on Cloudinary.`,
    projectAchievements: `This was my first project with Next.js. Aside with SSR in Next.js, I learned how to utilise a CMS like Strapi and how to use Cloudinary.`,
    achievement: {
      name: '',
      achievementHref: '',
    },
  },
];

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
              <div className="mt-6 mr-2 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {allProjects.map((project) => (
                  <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className={classNames(
                      (project.id) % 2 === 0 ? 'bg-orange-100' : 'bg-violet-100', "flex-1 bg-violet-50 p-6 flex flex-col justify-between"
                    )}>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <a href={project.category.categoryHref} className="hover:underline">
                            {project.category.name}
                          </a>
                        </p>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                          <p className="mt-3 text-base text-gray-600">{project.description}</p>
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