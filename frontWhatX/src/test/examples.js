import { Set, GymExercise, GymWorkout } from "../Models/GymWorkout";

const ex_1 = new GymExercise("knebøy");
ex_1.addSet(new Set(12, 50));
ex_1.addSet(new Set(10, 55));

const ex_2 = new GymExercise("Markløft");
ex_2.addSet(new Set(12, 55));
ex_2.addSet(new Set(15, 60));
ex_2.addSet(new Set(12, 65));

export const workout = new GymWorkout("Test Workout 1", [ex_1, ex_2]);
