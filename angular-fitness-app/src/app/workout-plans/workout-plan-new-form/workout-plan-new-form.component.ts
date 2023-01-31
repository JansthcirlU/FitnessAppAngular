import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercises/exercise';
import { WorkoutPlan } from 'src/app/models/plans/workout-plan';
import { WorkoutPlanStep } from 'src/app/models/plans/workout-plan-step';
import { ExerciseService } from 'src/app/exercises/services/exercise.service';
import { OverlayContentComponent } from 'src/app/shared/overlay/overlay-content.component';
import { TimespanService } from 'src/tools/timespan.service';

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

  setsDefault: number = 3;
  setsMin: number = 1;
  repsDefault: number = 12;
  repsMin: number = 1;
  restDefault: number = 15;
  restMin: number = 1;
  restMax: number = 720;
  
  get name() {
    return this.planForm.get('name') as FormControl;
  }
  get description() {
    return this.planForm.get('description') as FormControl;
  }
  get steps() {
    const planFormArray = this.planForm.get('steps') as FormArray<FormGroup<{
      exerciseId: FormControl<string | null>,
      sets: FormControl<number | null>,
      reps: FormControl<number | null>,
      restTime: FormControl<number | null>
    }>>;
    return planFormArray;
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

  getStepAt(i: number): {
    exerciseId: FormControl<string | null>;
    sets: FormControl<number | null>;
    reps: FormControl<number | null>;
    restTime: FormControl<number | null>; } {
    const stepGroup = this.steps.at(i) as FormGroup<{
      exerciseId: FormControl<string | null>,
      sets: FormControl<number | null>,
      reps: FormControl<number | null>,
      restTime: FormControl<number | null>
    }>;
    return stepGroup.controls;
  }

  onSubmit() {
    debugger;
    const plan: WorkoutPlan = this.buildWorkoutPlan();
    console.log("Built form data for New Workout Plan:");
    console.log(plan);
    return plan;
  }

  private buildWorkoutPlan(): WorkoutPlan {
    const name: string = this.name.value!;
    const description: string = this.description.value!;
    const steps: WorkoutPlanStep[] = this.steps.controls.map((c, i) => {
      return {
        step: i,
        routine: {
          exercise: this.exercises!.at(i),
          set: {
            sets: c.controls.sets.value!,
            reps: c.controls.reps.value!,
            restTime: this.timespanService.secondsToTimeString(c.controls.restTime.value!)
          }
        }
      } as WorkoutPlanStep
    });
    const plan: WorkoutPlan = {
      id: crypto.randomUUID(), // TODO: Let back-end generate guid
      name: name,
      description: description,
      steps: steps
    };
    return plan;
  }

  private addStepGroup() {
    const stepGroup: FormGroup<{
      exerciseId: FormControl<string | null>,
      sets: FormControl<number | null>,
      reps: FormControl<number | null>,
      restTime: FormControl<number | null>
    }> = this.builder.group({
      exerciseId: ['', Validators.required],
      sets: [this.setsDefault, [Validators.required, Validators.min(this.setsMin)]],
      reps: [this.repsDefault, [Validators.required, Validators.min(this.repsMin)]],
      restTime: [this.restDefault, [Validators.required, Validators.min(this.restMin), Validators.max(this.restMax)]]
    });
    return stepGroup;
  }
}
