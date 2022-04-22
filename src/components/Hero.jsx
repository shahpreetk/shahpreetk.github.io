// @ts-check

import { FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const personDetails = [
  {
    name: "Preet Shah",
    imageUrl: "/images/preet-photo.jpg",
    title: "Fullstack Web Developer",
    shortDescription: `Self-taught MERN Stack Developer (MongoDB, Express, React, Node), Ardent Kitty lover, Painter (Digital Art too!) and an aspiring Software Engineer ❤️`,
    social: [
      {
        name: "Github",
        url: "https://github.com/shahpreetk",
        icon: <FaGithub size={24} />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shahpreetk/",
        icon: <FaLinkedin size={24} />,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/shahpreetk",
        icon: <FaTwitter size={24} />,
      },
      {
        name: "Resume",
        url: "/images/Preet-Kaushal-Shah-Resume.pdf",
        icon: <FaFilePdf size={24} />,
      }
    ],
    emailText: "Want to rant about coding or discuss painting? Hit me an email on shahpreetk[at]outlook[dot]com",
  }
];

const Hero = () => {
  return (
    <div>
      <div>
        <div className="my-2 text-sm text">
          <p className="block">
            Electronics and Telecommunication Engineer
          </p>
          <p className="block">
            Pursuing <span className="font-bold"> MSc. Computer Science </span> from {" "}
            <a href="https://www.ncl.ac.uk/" target="_blank" rel="noreferrer" className="underline decoration-solid hover:text-teal-600">
              Newcastle University, UK
            </a>
          </p>
          <div className="mt-2 border border-solid border-slate-700 rounded-xl" />
        </div>
        <div>
          <div>
            <div className="bg-white">
              <div className="mx-auto py-4">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  <div className="lg:col-span-2">
                    <ul
                      className="sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                    >
                      {personDetails.map((person) => (
                        <li key={person.name} className="sm:py-8">
                          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                            <div className="aspect-w-6 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1">
                              <img className="object-cover shadow-lg rounded-lg h-48 w-48 sm:h-auto sm:w-auto" src={person.imageUrl} alt={person.name} />
                            </div>
                            <div className="sm:col-span-2">
                              <div className="space-y-4">
                                <div className="leading-6 font-medium space-y-1">
                                  <h3 className="text-2xl">{person.name}</h3>
                                  <p className="text-teal-600 text-md">{person.title}</p>
                                </div>
                                <div className="text-md">
                                  <p className="text-gray-500">{person.shortDescription}</p>
                                </div>
                                <ul className="flex space-x-5 mb-4 pb-1 sm:pb-4">
                                  {person.social.map((socialIcon) => (
                                    <li key={socialIcon.name}>
                                      <a className="text-gray-400 hover:text-teal-500"
                                        href={socialIcon.url} target="_blank" rel="noreferrer">
                                        {socialIcon.icon}
                                        <span className="sr-only">{socialIcon.icon}</span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                                <div className="text-sm">
                                  <p className="text-gray-500">{person.emailText}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;