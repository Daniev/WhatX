import React from "react";
import "../styles/WorkoutComponentStyle.css";
import { workout } from "../test/examples";

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

export class ViewWorkoutComponent extends React.Component {
  render() {
    return (
      <div className="WorkoutContainer">
        <h3 className="WorkoutName">{this.props.workout.name}</h3>
        <ExerciseComponent exercises={this.props.workout.exercises} />
      </div>
    );
  }
}

export class ViewWorkoutsComponent extends React.Component {
  render() {
    const workouts = this.props.workouts;
    const workoutList = workouts.map((workout) => {
      return <ViewWorkoutComponent workout={workout} />;
    });
    return <div>{workoutList}</div>;
  }
}

/// For displaying summary of workouts.
class WorkoutShortComponent extends React.Component {
  // EditWorkout() {
  //   console.log("Edit workout", this.props.workout);
  //   alert("Edit workout", this.props.workout);
  // }
  render() {
    const workout = this.props.workout;
    return (
      <div className="WorkoutOverview">
        <h3>{workout.name}</h3>
        {/* <button onClick={this.EditWorkout}>Edit</button> */}
      </div>
    );
  }
}

export class OverviewWorkoutsComponent extends React.Component {
  render() {
    const workouts = this.props.workouts;
    const workoutList = workouts.map((workout) => {
      return <WorkoutShortComponent workout={workout} />;
    });
    return <div className="WorkoutsOverview">{workoutList}</div>;
  }
}
