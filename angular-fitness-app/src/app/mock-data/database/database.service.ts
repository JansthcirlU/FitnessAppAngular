import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Equipment } from 'src/app/models/equipment/equipment-base';
import { Exercise } from 'src/app/models/exercises/exercise';
import { Muscle } from 'src/app/models/muscles/muscle';
import { WorkoutPlan } from 'src/app/models/plans/workout-plan';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

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
    const exercises: Exercise[] = [
      {
        id: crypto.randomUUID(),
        name: "Push-ups",
        description: "Push-ups description",
        trainedMuscles: [
          "Push-ups_muscle1",
          "Push-ups_muscle2",
          "Push-ups_muscle3"
        ]
      },
      {
        id: crypto.randomUUID(),
        name: "Burpees",
        description: "Burpees description",
        trainedMuscles: [
          "Burpees_muscle1",
          "Burpees_muscle2",
          "Burpees_muscle3"
        ]
      },
      {
        id: crypto.randomUUID(),
        name: "Calf Raises",
        description: "Calf Raises description",
        trainedMuscles: [
          "Calf Raises_muscle1",
          "Calf Raises_muscle2",
          "Calf Raises_muscle3"
        ]
      }
    ];
    const equipment: Equipment[] = [

    ];
    const muscles: Muscle[] = [
      
    ];
    return { plans, exercises, equipment, muscles };
  }
}
