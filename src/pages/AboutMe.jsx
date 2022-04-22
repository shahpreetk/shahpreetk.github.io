import Experience from "../components/Experience";
import Extracurricular from "../components/Extracurricular";
import Hero from "../components/Hero";
import Technology from "../components/Technology";

const AboutMe = () => {
  return (
    <>
      <main className="grid col-start-2 sm:col-start-6">
        <div className="py-6 ml-2 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">About Me</h1>
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-2">
              <div className="min-h-fit">
                <Hero />
              </div>
              <div className="border border-solid border-slate-200 rounded-xl" />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-2 pb-4 mb-4">
              <div className="min-h-fit" />
              <Experience />
            </div>
            <div className="border border-solid border-slate-200 rounded-xl" />
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-2">
              <div className="min-h-fit" />
              <Technology />
            </div>
            <div className="border border-solid border-slate-200 rounded-xl" />
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-2">
              <div className="min-h-fit" />
              <Extracurricular />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutMe;