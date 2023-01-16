export interface WorkoutPlanStepRoutineSet {
    sets: number,
    reps: number,
    restTime: string; // TimeSpan breaking change since .NET 6
}