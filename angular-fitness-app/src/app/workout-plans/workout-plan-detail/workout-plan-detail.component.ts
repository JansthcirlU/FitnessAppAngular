import { Component, Input, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/models/plans/workout-plan';

@Component({
  selector: 'app-workout-plan-detail',
  templateUrl: './workout-plan-detail.component.html',
  styleUrls: ['./workout-plan-detail.component.css']
})
export class WorkoutPlanDetailComponent implements OnInit {
  
  @Input() plan?: WorkoutPlan;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}