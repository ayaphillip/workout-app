import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import exercisesData from "../exercises/exercises.json";

const Plan = () => {
  const location = useLocation();
  const { days, goal } = location.state || {};

  if (!days || !goal) {
    return <p className="text-red-500">Days or goal not provided.</p>;
  }

  const generateWorkoutPlan = (days) => {
    const workoutPlan = Array.from({ length: days }, () => []);

    // Get all exercises for the specified goal
    const exercises = [];
    for (const muscleGroup in exercisesData.exercises) {
      exercisesData.exercises[muscleGroup].forEach((exercise) => {
        exercises.push({
          muscleGroup,
          name: exercise.name,
          sets: exercise[goal].sets,
          reps: exercise[goal].reps,
        });
      });
    }

    // Shuffle exercises
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledExercises = shuffle(exercises);

    if (days === 3) {
      // Full-body workout for 3 days
      const muscleGroups = Object.keys(exercisesData.exercises);

      for (let i = 0; i < days; i++) {
        muscleGroups.forEach((muscleGroup) => {
          const muscleGroupExercises = shuffledExercises.filter(
            (exercise) => exercise.muscleGroup === muscleGroup
          );

          // Ensure we have at least one exercise per muscle group per day
          if (muscleGroupExercises.length > 0) {
            const exercise = muscleGroupExercises.shift();
            workoutPlan[i].push(exercise);
          }
        });
      }

      // Fill remaining slots with random exercises ensuring no duplication within the same day
      for (let i = 0; i < days; i++) {
        while (workoutPlan[i].length < 4) {
          const remainingExercises = shuffledExercises.filter(
            (exercise) =>
              !workoutPlan[i].some(
                (existingExercise) =>
                  existingExercise.muscleGroup === exercise.muscleGroup
              )
          );

          if (remainingExercises.length > 0) {
            const exercise = remainingExercises.shift();
            workoutPlan[i].push(exercise);
          }
        }
      }
    } else {
      // Ensure each muscle group is hit 2-3 times for 4+ days
      let currentIndex = 0;
      for (let i = 0; i < days; i++) {
        for (let j = 0; j < 4; j++) {
          if (currentIndex >= shuffledExercises.length) {
            currentIndex = 0;
          }
          workoutPlan[i].push(shuffledExercises[currentIndex]);
          currentIndex++;
        }
      }
    }

    return workoutPlan;
  };

  const workoutPlan = generateWorkoutPlan(days);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="mt-16">
        {" "}
        {/* Add margin top to create space */}
        <div className="container mx-auto p-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {workoutPlan.map((dayExercises, dayIndex) => (
              <div key={dayIndex} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Day {dayIndex + 1}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="py-2 px-4 text-left">Exercise</th>
                        <th className="py-2 px-4 text-left">Muscle Group</th>
                        <th className="py-2 px-4 text-left">Sets</th>
                        <th className="py-2 px-4 text-left">Reps</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dayExercises.map((exercise, index) => (
                        <tr key={index} className="border-t hover:bg-gray-100">
                          <td className="py-2 px-4">{exercise.name}</td>
                          <td className="py-2 px-4">{exercise.muscleGroup}</td>
                          <td className="py-2 px-4">{exercise.sets}</td>
                          <td className="py-2 px-4">{exercise.reps}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
