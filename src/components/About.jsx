import React from "react";

const About = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white text-black pb-40">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Hey, I'm <span className="font-semibold">Vedant</span> (but you can
          call me Kitsune). I'm from India, currently navigating my way through{" "}
          <strong>BCA</strong>, and somewhere between writing code and
          debugging, I discovered my love for{" "}
          <strong>3D and graphics programming</strong>.
          <br />
          <br />
          My code rarely works on the first try… honestly, not even the second.
          But hey, that’s what makes me a <strong>real</strong> developer,
          right? I break things, fix them, and occasionally pretend I meant to
          do that. 😎
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Tech Stack</h2>
        <p className="mt-2 text-gray-600">
          These are my weapons of choice (aka the stuff I break and fix daily):
        </p>

        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <TechIcon name="JavaScript" svgPath="/assets/logo-javascript.svg" />
          <TechIcon name="TypeScript" svgPath="/assets/typescript.svg" />
          <TechIcon name="Unity" svgPath="/assets/unity-69.svg" />
          <TechIcon name="Blender" svgPath="/assets/blender-2.svg" />
          <TechIcon name="Three.js" svgPath="/assets/threejs-1.svg" />
        </div>

        {/* <div className="mt-6 flex justify-center gap-4">
          <a
            href="#project"
            className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:opacity-80 transition"
          >
            Some cool stuff i did -{">"}
          </a>
        </div> */}

      </div>
    </section>
  );
};

const TechIcon = ({ name, svgPath }) => (
  <div className="flex flex-col items-center">
    <img
      src={svgPath}
      alt={name}
      className="w-12 h-12 transition-transform duration-200 hover:scale-110"
    />
    <span className="mt-2 text-sm">{name}</span>
  </div>
);

export default About;
