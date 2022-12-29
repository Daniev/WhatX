// Page were one can view existing exercises..
import React from "react";
import { ViewWorkoutComponent } from "./WorkoutComponent";
import { workout } from "../test/examples";

export const ViewPage = () => {
  return (
    <div className="ViewPageContainer">
      <h2>View Workouts!</h2>
      <ViewWorkoutComponent workout={workout} />
    </div>
  );
};
