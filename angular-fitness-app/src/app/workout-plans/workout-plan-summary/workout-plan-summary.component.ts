import { Component, Input, OnInit } from '@angular/core';
import { WorkoutPlanSummary } from 'src/models/plans/workout-plan-summary';

@Component({
  selector: 'app-workout-plan-summary',
  templateUrl: './workout-plan-summary.component.html',
  styleUrls: ['./workout-plan-summary.component.css']
})
export class WorkoutPlanSummaryComponent implements OnInit {
  @Input() planSummary?: WorkoutPlanSummary;
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}