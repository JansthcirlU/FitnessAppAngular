/**
 * Interface with all the properties inside a .NET TimeSpan.
 * @deprecated .NET TimeSpan now gets serialised as a simple time string
 */
export interface TimeSpan {
    Ticks: number,
    Days: number,
    Hours: number,
    Milliseconds: number,
    Microseconds: number,
    Nanoseconds: number,
    Minutes: number,
    Seconds: number,
    TotalDays: number,
    TotalHours: number,
    TotalMilliseconds: number,
    TotalMicroseconds: number,
    TotalNanoseconds: number,
    TotalMinutes: number,
    TotalSeconds: number;
}