// @ts-check
import React from "react";

const BASE_LOGO_PATH = "/images/companylogos";

const extracurriculars = [
  {
    name: 'PowerUp Bournemouth [November 2022]',
    description:
      `As the Logistics Lead for PowerUp by J.P. Morgan Chase, I successfully organized a week-long tech conference in Bournemouth, UK in November 2022. I led a team of volunteers and managed logistics such as venue, catering, scheduling and swag distribution, ensuring a seamless and memorable experience for all attendees.`,
    instagramURL: `https://www.linkedin.com/posts/clrapp_powerup-tech-bournemouth-activity-6998274953695440897-stZH?utm_source=share&utm_medium=member_desktop`,
    image: `${BASE_LOGO_PATH}/jpmc.jpg`,
  },
  {
    name: 'LEO [2019 - Present]',
    description:
      `Lions Clubs International's youth organisation is called LEO. It emphasises community service, camaraderie, and networking opportunities. I've been a member of this organisation for three years and am presently the Past President of the Leo Club of Walkeshwar, the Past President of Leo District 3231 A1, and the Chief Website Officer of Leo Multiple 3231, India. As District President, it was my responsibility to supervise the smooth operation of the seven clubs in the South Mumbai area.`,
    instagramURL: `https://www.instagram.com/p/CASmGG1gx1e/`,
    image: `${BASE_LOGO_PATH}/leo.jpg`,
  },
  {
    name: 'IETE [2019 - 2021]',
    description:
      `For four years, I was a member of my college's chapter of the Institute of Electronics and Telecommunication Engineers (IETE). Data Science Bootcamp, Web Development Workshop, Poster Competition, and Technical Mock Interview are just a few of the workshops, bootcamps, competitions, and events we've done over the years. I had also served as Treasurer and Chairperson throughout the previous two years.`,
    instagramURL: `https://www.instagram.com/p/B8059ithsuW/`,
    image: `${BASE_LOGO_PATH}/iete.jpg`,
  },
  {
    name: 'NSS [2018 - 2020]',
    description:
      `The National Service Scheme (NSS) is a Central Sector Scheme run by the Ministry of Youth Affairs and Sports of the Government of India. It was a two-year experience of participating in, and then organising as the Assistant leader, numerous community service activities. I've organised a number of blood drives, staged street plays to raise awareness about various social concerns, painted railway station walls, and hosted medical camps in communities throughout the years.`,
    instagramURL: `https://www.instagram.com/p/B0K_DW-HnTL/`,
    image: `${BASE_LOGO_PATH}/nss.jpg`,
  },
];


const Extracurricular = () => {
  return (
    <>
      <div className="py-4 bg-white">
        <div className="mx-auto">
          <div className="lg:text-left">
            <h1 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Extracurriculars
            </h1>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {extracurriculars.map((eachVal) => (
                <div key={eachVal.name} className="relative">
                  <dt>
                    <div className="sm:absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-200 text-white border-2 border-slate-200">
                      <img loading="lazy" className="h-11 w-11 rounded-md" src={eachVal.image} alt={eachVal.name} />
                    </div>
                    <p className="mt-1 sm:ml-16 text-lg leading-6 font-medium text-gray-900 inline-block">{eachVal.name}
                      <span className="ml-2 text-violet-600 inline-block align-bottom">
                        <a href={eachVal.instagramURL} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                      </span>
                    </p>
                  </dt>
                  <dd className="mt-1 sm:ml-16 sm:mt-2 text-base text-gray-500 whitespace-pre-wrap text-justify">{eachVal.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </>
  );
};

export default Extracurricular;