import { RoutineExercise } from "./routine-exercise";
import { RoutineSet } from "./routine-set";

export interface StepRoutine {
    exercise: RoutineExercise,
    set: RoutineSet;
}