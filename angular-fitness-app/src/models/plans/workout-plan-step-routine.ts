import { WorkoutPlanStepRoutineExercise } from "./workout-plan-step-routine-exercise";
import { WorkoutPlanStepRoutineSet } from "./workout-plan-step-routine-set";

export interface WorkoutPlanStepRoutine {
    exercise: WorkoutPlanStepRoutineExercise,
    set: WorkoutPlanStepRoutineSet;
}