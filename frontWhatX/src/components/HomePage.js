import React from "react";
import "../styles/HomePage.css";
import { OverviewWorkoutsComponent } from "./WorkoutComponent";
import { workouts } from "../test/examples";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <h3 className="Title">Edit workouts!</h3>
      <OverviewWorkoutsComponent workouts={workouts} />
    </div>
  );
};
