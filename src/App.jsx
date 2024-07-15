import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    if (Theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("text-black");
      document.body.classList.remove("font-bold");
      document.body.classList.add("font-normal");
    } else {
      document.body.classList.add("text-black");
      document.body.classList.remove("dark");
      document.body.classList.remove("font-normal");
      document.body.classList.add("font-bold");
    }
  }, [Theme]);

  return (
    <div className="dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {Theme === "dark" ? (
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
      ) : (
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      )}
      <Navbar setTheme={setTheme} Theme={Theme} />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
