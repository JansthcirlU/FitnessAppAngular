import { PlanStep } from "./plan-step";

export interface WorkoutPlan {
    id: string, // Guid to text
    name: string,
    description: string,
    steps: PlanStep[]
}