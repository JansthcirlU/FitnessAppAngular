import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-plan-new',
  templateUrl: './workout-plan-new.component.html',
  styleUrls: ['./workout-plan-new.component.css']
})
export class WorkoutPlanNewComponent {
  isCreating: boolean = false;

  toggleCreating(): void {
    this.isCreating = !this.isCreating;
  }
}
