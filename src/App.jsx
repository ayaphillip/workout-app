import React from "react";
import { Navbar, Hero, GetStartedForm, About } from "./components";
import gradient from "./assets/gradient.jpg";

function App() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <GetStartedForm />
    </div>
  );
}

export default App;
