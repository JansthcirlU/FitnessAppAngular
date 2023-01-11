import { Component, Input, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/models/plans/workout-plan';

@Component({
  selector: 'app-workout-plan-summary',
  templateUrl: './workout-plan-summary.component.html',
  styleUrls: ['./workout-plan-summary.component.css']
})
export class WorkoutPlanSummaryComponent implements OnInit {
  @Input() plan?: WorkoutPlan;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}