import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';
import { WorkoutPlan } from 'src/models/plans/workout-plan';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const plans: WorkoutPlan[] = [
      {
        id: crypto.randomUUID(),
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
        id: crypto.randomUUID(),
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
      {
        id: crypto.randomUUID(),
        name: "third plan name",
        description: "this is the third plan",
        steps: [
          {
            step: 1,
            routine: {
              exercise: {
                name: "sit-ups",
                description: "description of doing sit-ups"
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
                name: "pull-ups",
                description: "description of doing pull-ups"
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
                name: "deadlifts",
                description: "description of doing deadlifts"
              },
              set: {
                sets: 3,
                reps: 20,
                restTime: "00:00:30"
              }
            }
          }
        ]
      }
    ];
    return {plans};
  }

  genId(plans: WorkoutPlan[]): string {
    return crypto.randomUUID();
  }
}
