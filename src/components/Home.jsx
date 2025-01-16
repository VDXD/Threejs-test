import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white text-black relative pb-40">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold">Hey, I'm Kitsune</h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate Frontend Designer who loves working with 3D to create
          immersive and interactive web experiences.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:opacity-80 transition"
          >
            Know more about me -{">"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
