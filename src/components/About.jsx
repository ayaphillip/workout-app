import React from "react";
import gradient from "../assets/gradient.jpg";

const About = () => {
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
        <div
          id="about"
          className="text-white flex flex-col items-center justify-center flex-grow"
        >
          <h2 className="text-4xl font-bold mb-4">About</h2>
          <p className="text-lg max-w-2xl text-center">
            Workout Architect is your ultimate tool for designing and managing
            personalized workout plans. Our platform helps you stay motivated,
            track your progress, and achieve your fitness goals with ease.
            Whether you're a beginner or a seasoned athlete, Workout Architect
            has the features you need to succeed.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
