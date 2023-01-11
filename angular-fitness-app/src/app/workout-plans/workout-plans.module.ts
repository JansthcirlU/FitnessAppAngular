import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanDetailComponent } from './workout-plan-detail/workout-plan-detail.component';
import { WorkoutPlanSummaryComponent } from './workout-plan-summary/workout-plan-summary.component';
import { WorkoutPlanOverviewComponent } from './workout-plan-overview/workout-plan-overview.component';



@NgModule({
  declarations: [
    WorkoutPlanDetailComponent,
    WorkoutPlanSummaryComponent,
    WorkoutPlanOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkoutPlansModule { }
