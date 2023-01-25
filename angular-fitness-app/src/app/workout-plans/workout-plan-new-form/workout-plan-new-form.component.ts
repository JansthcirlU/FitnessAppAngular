import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercises/exercise';
import { WorkoutPlan } from 'src/app/models/plans/workout-plan';
import { WorkoutPlanStep } from 'src/app/models/plans/workout-plan-step';
import { ExerciseService } from 'src/app/exercises/services/exercise.service';
import { OverlayContentComponent } from 'src/app/shared/overlay/overlay-content.component';
import { TimespanService } from 'src/tools/timespan.service';

const setsDefault: number = 3;
const setsMin: number = 1;
const repsDefault: number = 12;
const repsMin: number = 1;
const restDefault: number = 15;
const restMin: number = 1;
const restMax: number = 720;

@Component({
  selector: 'app-workout-plan-new-form',
  templateUrl: './workout-plan-new-form.component.html',
  styleUrls: ['./workout-plan-new-form.component.css']
})
export class WorkoutPlanNewFormComponent implements OnInit, OverlayContentComponent {
  planForm: FormGroup = this.builder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    steps: this.builder.array([])
  });
  
  get name() {
    return this.planForm.get('name') as FormControl;
  }
  get description() {
    return this.planForm.get('description') as FormControl;
  }
  get steps() {
    return this.planForm.get('steps') as FormArray;
  }

  get exerciseIds() {
    return this.steps.controls.map(c => c.get('exerciseId')?.value) as string[];
  }

  plan?: Subject<WorkoutPlan>;
  exercises?: Exercise[];

  constructor(
    private builder: FormBuilder,
    private exerciseService: ExerciseService,
    private timespanService: TimespanService) {}

  ngOnInit(): void {
    this.exerciseService
      .getExercises().pipe(
        tap(exs => this.exercises = exs),
        // finalize() when stream ends
      ).subscribe();
  }

  doSomething() {
    const plan: WorkoutPlan = this.buildWorkoutPlan();
    console.log(plan);
  }

  addStep() {
    this.steps.push(this.addStepGroup());
  }

  onSubmit(): void {
    debugger;
    const plan: WorkoutPlan = this.buildWorkoutPlan();
    console.log("Submitted form data for New Workout Plan:");
    console.log(plan);
  }

  private buildWorkoutPlan(): WorkoutPlan {
    const name: string = this.name.value;
    const description: string = this.description.value;
    const steps: WorkoutPlanStep[] = this.steps.controls.map((c, i) => {
      return {
        step: i,
        routine: {
          exercise: this.exercises?.at(i),
          set: {
            sets: c.get('sets')?.value,
            reps: c.get('reps')?.value,
            restTime: this.timespanService.secondsToTimeString(c.get('restTime')?.value)
          }
        }
      } as WorkoutPlanStep
    });
    const plan: WorkoutPlan = {
      id: crypto.randomUUID(), // Let back-end generate guid
      name: name,
      description: description,
      steps: steps
    };
    return plan;
  }

  private addStepGroup() {
    const stepGroup: FormGroup = this.builder.group({
      exerciseId: ['', Validators.required],
      sets: [setsDefault, [Validators.required, Validators.min(setsMin)]],
      reps: [repsDefault, [Validators.required, Validators.min(repsMin)]],
      restTime: [restDefault, [Validators.required, Validators.min(restMin), Validators.max(restMax)]]
    });
    return stepGroup;
  }
}
