import { Set, GymExercise, GymWorkout } from "../Models/GymWorkout";

const ex_1 = new GymExercise("Knebøy");
ex_1.addSet(new Set(12, 50));
ex_1.addSet(new Set(10, 55));

const ex_4 = new GymExercise("Brystpress");
let set = new Set(12, 40);
ex_4.addSet(set);
ex_4.addSet(set);
ex_4.addSet(set);
ex_4.addSet(set);

const ex_5 = new GymExercise("Stående roing");
ex_5.addSet(new Set(8, 40));
ex_5.addSet(new Set(8, 45));
ex_5.addSet(new Set(8, 45));

const ex_2 = new GymExercise("Markløft");
ex_2.addSet(new Set(12, 55));
ex_2.addSet(new Set(15, 60));
ex_2.addSet(new Set(12, 65));

const ex_3 = new GymExercise("Skulderpress");
set = new Set(12, 28);
ex_3.addSet(set);
ex_3.addSet(set);
ex_3.addSet(set);

const ex_6 = new GymExercise("Brystmaskin");
ex_6.addSet(new Set(12, 40));
ex_6.addSet(new Set(12, 40));
ex_6.addSet(new Set(12, 40));
ex_6.addSet(new Set(12, 40));

const ex_7 = new GymExercise("Nedtrekk");
ex_7.addSet(new Set(12, 50));
ex_7.addSet(new Set(10, 50));
ex_7.addSet(new Set(10, 50));
ex_7.addSet(new Set(8, 50));

export const workout = new GymWorkout("Test Workout 1", [
  ex_1,
  ex_2,
  ex_3,
  ex_4,
  ex_5,
  ex_6,
  ex_7,
]);

const w2 = new GymWorkout("Test Workout 2", [ex_2, ex_3, ex_4]);

export const workouts = [workout, w2];
