import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/models/plans/workout-plan';

@Component({
  selector: 'app-workout-plan-overview',
  templateUrl: './workout-plan-overview.component.html',
  styleUrls: ['./workout-plan-overview.component.css']
})
export class WorkoutPlanOverviewComponent implements OnInit {

  // TODO: move this to a service
  plans: WorkoutPlan[] = [
    {
      id: "first plan id",
      name: "first plan name",
      description: "this is the first plan",
      steps: [
        {
          step: 1,
          routine: {
            exercise: {
              name: "pushups",
              description: "description of doing pushups"
            },
            set: {
              sets: 3,
              reps: 15,
              restTime: "00:00:45"
            }
          }
        },
        {
          step: 2,
          routine: {
            exercise: {
              name: "sit-ups",
              description: "description of doing sit-ups"
            },
            set: {
              sets: 4,
              reps: 12,
              restTime: "00:01:00"
            }
          }
        },
        {
          step: 3,
          routine: {
            exercise: {
              name: "squats",
              description: "description of doing squats"
            },
            set: {
              sets: 3,
              reps: 20,
              restTime: "00:00:40"
            }
          }
        }
      ]
    },
    {
      id: "second plan id",
      name: "second plan name",
      description: "this is the second plan",
      steps: [
        {
          step: 1,
          routine: {
            exercise: {
              name: "burpees",
              description: "description of doing burpees"
            },
            set: {
              sets: 3,
              reps: 12,
              restTime: "00:00:45"
            }
          }
        },
        {
          step: 2,
          routine: {
            exercise: {
              name: "lunges",
              description: "description of doing lunges"
            },
            set: {
              sets: 3,
              reps: 15,
              restTime: "00:00:30"
            }
          }
        },
        {
          step: 3,
          routine: {
            exercise: {
              name: "jumping jacks",
              description: "description of doing jumping jacks"
            },
            set: {
              sets: 3,
              reps: 20,
              restTime: "00:00:30"
            }
          }
        }
      ]
    },
  ];

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}