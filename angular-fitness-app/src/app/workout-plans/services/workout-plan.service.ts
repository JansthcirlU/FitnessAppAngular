import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { WorkoutPlanStep } from 'src/app/models/plans/workout-plan-step';
import { WorkoutPlan } from 'src/app/models/plans/workout-plan';
import { WorkoutPlanSummary } from 'src/app/models/plans/workout-plan-summary';
import { WorkoutPlanStepSummary } from 'src/app/models/plans/workout-plan-step-summary';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {

  private workoutPlansUrl: string = "api/plans/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  addWorkoutPlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this.http
      .post<WorkoutPlan>(this.workoutPlansUrl, plan, this.httpOptions)
      .pipe(
        tap(_ => console.log("Added new workout plan"))
        // TODO: handle errors
      );
  }

  deleteWorkoutPlan(guid: string): Observable<WorkoutPlan> {
    const url = `${this.workoutPlansUrl}/${guid}`;
    return this.http
      .delete<WorkoutPlan>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log("Deleted workout plan"))
        // TODO: handle errors
      );
  }

  getWorkoutPlanSummaries(): Observable<WorkoutPlanSummary[]> {
    return this.getWorkoutPlans()
      .pipe(
        tap(_ => {}), // TODO: do something here?
        // Does this cancel deferred execution?
        map((pl) => pl.map(p => this.getWorkoutPlanSummary(p))),
        catchError(_ => []) // TODO: do something here
      );
  }

  private getWorkoutPlanSummary(plan: WorkoutPlan): WorkoutPlanSummary {
    const summaryName: string = plan.name;
    const summaryDescription: string = plan.description;
    const summarySteps: WorkoutPlanStepSummary[] = plan.steps
      .map(s => this.getWorkoutStepSummary(s));
    return {
      name: summaryName,
      description: summaryDescription,
      stepSummaries: summarySteps
    };
  }

  private getWorkoutStepSummary(planStep: WorkoutPlanStep): WorkoutPlanStepSummary {
    const stepNumber: number = planStep.step;
    const exerciseName: string = planStep.routine.exercise.name;
    const sets: number = planStep.routine.set.sets;
    const reps: number = planStep.routine.set.reps;
    const restTime: string = planStep.routine.set.restTime;
    return {
      step: stepNumber,
      exercise: exerciseName,
      summary: `${sets}x${reps} (${restTime})`
    };
  }

  private getWorkoutPlans(): Observable<WorkoutPlan[]> {
    const workoutPlans$ = this.http.get<WorkoutPlan[]>(this.workoutPlansUrl);
    return workoutPlans$;
  }
}
