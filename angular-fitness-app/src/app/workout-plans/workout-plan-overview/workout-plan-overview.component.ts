import { Component, OnInit } from '@angular/core';
import { WorkoutPlanSummary } from 'src/models/plans/workout-plan-summary';
import { SubscribableTitleService } from 'src/services/subscribable-title/subscribable-title.service';
import { WorkoutPlanService } from 'src/services/workout-plans/workout-plan.service';

@Component({
  selector: 'app-workout-plan-overview',
  templateUrl: './workout-plan-overview.component.html',
  styleUrls: ['./workout-plan-overview.component.css']
})
export class WorkoutPlanOverviewComponent implements OnInit {

  planSummaries: WorkoutPlanSummary[] = [];

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private titleService: SubscribableTitleService) {
    this.titleService.setTitle("My Workout Plans");
  }

  ngOnInit(): void {
    this.workoutPlanService
      .getWorkoutPlanSummaries()
      .subscribe(summaries => this.planSummaries = summaries);
  }
}