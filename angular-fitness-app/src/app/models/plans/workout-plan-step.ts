import { WorkoutPlanStepRoutine } from "./workout-plan-step-routine";

export interface WorkoutPlanStep {
    step: number,
    routine: WorkoutPlanStepRoutine;
}