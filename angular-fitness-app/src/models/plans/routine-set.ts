import { TimeSpan } from "../common/timespan"

export interface RoutineSet {
    sets: number,
    reps: number,
    restTime: string; // TimeSpan breaking change since .NET 6
}