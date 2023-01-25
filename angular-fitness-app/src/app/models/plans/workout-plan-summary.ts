import { WorkoutPlanStepSummary } from "./workout-plan-step-summary";

export interface WorkoutPlanSummary {
    name: string;
    description: string;
    stepSummaries: WorkoutPlanStepSummary[];
}