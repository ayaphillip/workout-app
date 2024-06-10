import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gradient from "../assets/gradient.jpg";

function GetStartedForm() {
  const [days, setDays] = useState(3); // Default selected days
  const [goal, setGoal] = useState("strength"); // Default selected goal

  const workoutDayOptions = [
    { value: 3, label: "3 Days" },
    { value: 4, label: "4 Days" },
    { value: 5, label: "5 Days" },
    { value: 6, label: "6 Days" },
  ];

  const navigate = useNavigate();

  const handleDaysChange = (e) => {
    setDays(Number(e.target.value));
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the Plan component with the selected days and goal as state
    navigate("/Plan", { state: { days, goal } });
  };

  return (
    <section
      id="getStartedForm"
      className="get-started h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-white text-3xl font-bold mb-8">
        Create the best version of you today!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full md:w-1/2"
      >
        <label htmlFor="days" className="text-xl font-bold text-white">
          What's your desired workout frequency goal?{" "}
        </label>
        <div className="flex flex-col space-y-2">
          {workoutDayOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`days-${option.value}`}
                name="days"
                value={option.value}
                checked={days === option.value}
                onChange={handleDaysChange}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-2"
              />
              <label htmlFor={`days-${option.value}`} className="text-white">
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="goal" className="text-xl font-bold text-white">
            What is your goal?
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="goal-strength"
              name="goal"
              value="strength"
              checked={goal === "strength"}
              onChange={handleGoalChange}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-2"
            />
            <label htmlFor="goal-strength" className="text-white">
              Build Strength
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="goal-muscle"
              name="goal"
              value="muscle"
              checked={goal === "muscle"}
              onChange={handleGoalChange}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-2"
            />
            <label htmlFor="goal-muscle" className="text-white">
              Build Muscle
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-700"
        >
          Let's Go!
        </button>
      </form>
    </section>
  );
}

export default GetStartedForm;
