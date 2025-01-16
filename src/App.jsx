import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [animationName, setAnimationName] = useState("Idle");


  return (
    <>
      <Navbar setAnimationName={setAnimationName} />

      <main className="w-screen h-screen flex flex-col items-center justify-center bg-white pt-16">
        <section className="grid grid-cols-2 w-full h-full">
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-2xl text-black">
              {animationName === "Idle" && <Home />}
              {animationName === "Punching" && <About />}
              {animationName === "Kicking" && <Project />}
              {animationName === "Standing" && <Contact />}
            </div>
          </div>

          <div className="flex items-center justify-center bg-white relative">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 35 }}>
              <color attach="background" args={["#ffffff"]} />{" "}
              <Experience animation={animationName} />
            </Canvas>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
