import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Muscle } from 'src/models/muscles/muscle';

const muscles: Muscle[] = [
  new Muscle("1", "Biceps", "Arm muscle that lies on the front of the upper arm between the shoulder and the elbow."),
  new Muscle("2", "Quadriceps", "Leg muscle group on the thigh."),
  new Muscle("3", "Pectoralis major", "Chest muscle.")
];

@Injectable({
  providedIn: 'root'
})
export class MusclesService {

  constructor() { }

  // fetchMuscles(): Subject<Muscle[]> {

  // }

}
