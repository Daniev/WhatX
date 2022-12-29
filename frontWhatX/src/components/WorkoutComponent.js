import { render } from "@testing-library/react";
import React from "react";
import "../styles/WorkoutComponentStyle.css";

class RepsComponent extends React.Component {
  render() {
    const sets = this.props.sets;
    const listSets = sets.map((set) => {
      return (
        <li className="ExerciseRepListElement">
          Weight: {set.weight} kg, Reps: {set.rep}
        </li>
      );
    });

    return <ul>{listSets}</ul>;
  }
}

class ExerciseComponent extends React.Component {
  render() {
    const exercises = this.props.exercises;
    const renderedExercises = exercises.map((exercise) => {
      return (
        <div className="ExerciseContainer">
          <h4 className="ExerciseName">{exercise.name}</h4>
          <p>Sets: {exercise.sets.lenght}</p>
          <RepsComponent sets={exercise.sets} />
        </div>
      );
    });

    return <div>{renderedExercises}</div>;
  }
}

export class WorkoutComponent extends React.Component {
  render() {
    return (
      <div className="WorkoutContainer">
        <h3 className="WorkoutName">{this.props.workout.name}</h3>
        <ExerciseComponent exercises={this.props.workout.exercises} />
      </div>
    );
  }
}
