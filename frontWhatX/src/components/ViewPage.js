// Page were one can view existing exercises..
import React from "react";
import { ViewWorkoutsComponent } from "./WorkoutComponent";
import { workouts } from "../test/examples";

export const ViewPage = () => {
  return (
    <div className="ViewPageContainer">
      <h2>View Workouts!</h2>
      <ViewWorkoutsComponent workouts={workouts} />
    </div>
  );
};
