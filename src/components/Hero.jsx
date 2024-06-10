import React from "react";
import gradient from "../assets/gradient.jpg"; // Import directly from image path

function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-hero-image">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to{" "}
            <span className="text-cyan-500 font-bold">Workout Architect</span>.
          </h1>
        </div>

        <div
          className="absolute bottom-16 animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <p className="text-white text-xl">About</p>
          <svg
            className="w-6 h-6 text-white mx-auto mt-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;
