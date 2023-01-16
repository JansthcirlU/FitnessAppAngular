import { WorkoutPlanStep } from "./workout-plan-step";

export interface WorkoutPlan {
    id: string, // Guid to text
    name: string,
    description: string,
    steps: WorkoutPlanStep[]
}