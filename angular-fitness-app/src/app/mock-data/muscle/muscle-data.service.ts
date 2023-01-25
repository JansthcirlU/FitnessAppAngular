import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Muscle } from 'src/models/muscles/muscle';

@Injectable({
  providedIn: 'root'
})
export class MuscleDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const muscles: Muscle[] = [
      {
        guid: crypto.randomUUID(),
        name: 'Biceps',
        description: 'Biceps description.'
      },
      {
        guid: crypto.randomUUID(),
        name: 'Triceps',
        description: 'Triceps description.'
      },
      {
        guid: crypto.randomUUID(),
        name: 'Deltoid',
        description: 'Deltoid description.'
      },
      {
        guid: crypto.randomUUID(),
        name: 'Trapezius',
        description: 'Trapezius description.'
      },
    ];
    return {muscles};
  }

  genId(muscles: Muscle[]): string {
    return crypto.randomUUID();
  }
}
