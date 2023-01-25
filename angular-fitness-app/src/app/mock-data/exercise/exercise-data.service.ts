import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Exercise } from 'src/models/exercises/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
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
    return {exercises};
  }

  genId(exercises: Exercise[]): string {
    return crypto.randomUUID();
  }
}
