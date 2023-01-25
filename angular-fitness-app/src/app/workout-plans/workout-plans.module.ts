import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanDetailComponent } from './workout-plan-detail/workout-plan-detail.component';
import { WorkoutPlanSummaryComponent } from './workout-plan-summary/workout-plan-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutPlanNewComponent } from './workout-plan-new/workout-plan-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockDataModule } from '../mock-data/mock-data.module';
import { SharedModule } from '../shared/shared.module';
import { WorkoutPlanOverviewComponent } from './workout-plan-overview/workout-plan-overview.component';
import { WorkoutPlanNewFormComponent } from './workout-plan-new-form/workout-plan-new-form.component';
import { WorkoutPlansRoutingModule } from './workout-plans-routing/workout-plans-routing.module';
import { WorkoutPlanService } from './services/workout-plan.service';

@NgModule({
  declarations: [
    WorkoutPlanSummaryComponent,
    WorkoutPlanDetailComponent,
    WorkoutPlanNewComponent,
    WorkoutPlanOverviewComponent,
    WorkoutPlanNewComponent,
    WorkoutPlanNewFormComponent,
  ],
  imports: [
    CommonModule,
    WorkoutPlansRoutingModule,
    ReactiveFormsModule,
    MockDataModule,
    SharedModule,
  ],
  // exports: [
  //   HttpClientModule,
  //   MockDataModule
  // ],
  providers: [
    WorkoutPlanService
  ]
})
export class WorkoutPlansModule { }
