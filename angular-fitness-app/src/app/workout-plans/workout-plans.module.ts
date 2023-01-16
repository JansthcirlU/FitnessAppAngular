import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanDetailComponent } from './workout-plan-detail/workout-plan-detail.component';
import { WorkoutPlanSummaryComponent } from './workout-plan-summary/workout-plan-summary.component';
import { WorkoutPlanOverviewComponent } from './workout-plan-overview/workout-plan-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorkoutPlanDataService } from 'src/mock-data/workout-plan/workout-plan-data.service';
import { WorkoutPlanNewComponent } from './workout-plan-new/workout-plan-new.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WorkoutPlanDetailComponent,
    WorkoutPlanSummaryComponent,
    WorkoutPlanOverviewComponent,
    WorkoutPlanNewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      WorkoutPlanDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule
  ]
})
export class WorkoutPlansModule { }
