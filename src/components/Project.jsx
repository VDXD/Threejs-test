import React from "react";

const Project = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-50 text-black pb-40">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          These are some of the projects I’ve worked on. 
        </p>

        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <ProjectCard
            title="ScoutPrice"
            description="A price tracker app which helps you to track you favorite products from amazon giving you best deals"
            link="https://github.com/VDXD/ScoutPrice"
          />
          <ProjectCard
            title="Compress"
            description="A pdf compresser application on which you can compress your pdf without any ads and worrying about data privacy. (in progress)"
            link="https://github.com/VDXD"
          />
          <ProjectCard
            title="Diary"
            description="A simple HTML, CSS, JS project in which you can note down your important moments forever."
            link="https://github.com/VDXD/Personal-Diary"
          />
        </div>

        <div className="mt-10 text-lg text-gray-600">
          <p className="font-semibold">More coming...</p>
        </div>

        {/* <div className="mt-6 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:opacity-80 transition"
          >
            Let's talk -{">"}
          </a>
        </div> */}

      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, link }) => (
  <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Project
      </a>
    </div>
  </div>
);

export default Project;
