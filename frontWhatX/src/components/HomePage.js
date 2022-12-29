import React from "react";
import "../styles/HomePage.css";
import { ViewWorkoutComponent } from "./WorkoutComponent";
import { workout } from "../test/examples";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h3 className="Title">Edit workouts!</h3>
      <ViewWorkoutComponent workout={workout} />
    </div>
  );
};
