export class Set {
  rep;
  weight;

  constructor(rep, weight) {
    this.rep = rep;
    this.weight = weight;
  }
}

export class GymExercise {
  name;
  sets;
  completed;

  constructor(name, sets = []) {
    this.name = name;
    this.sets = sets;
    this.completed = [];
    // set the correct amount of completed falses in the array.
    for (let set = 0; set < this.sets.lenght; set++) {
      this.completed.push(false);
    }
  }

  addSet(newSet) {
    this.sets.push(newSet);
  }

  markAsComplete(setNumber) {
    this.completed[setNumber] = true;
  }
}

export class GymWorkout {
  name;
  exercises;
  date;
  completed;

  constructor(name, exercises) {
    this.name = name;
    this.exercises = exercises;
    this.date = new Date();
    this.completed = false;
  }
  getDate() {
    return this.date.getDate();
  }
  setDate(newDate) {
    this.date = newDate;
  }
  markAsComplete() {
    this.completed = true;
  }
}
