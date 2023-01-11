import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOverviewComponent } from './exercise-overview/exercise-overview.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseSummaryComponent } from './exercise-summary/exercise-summary.component';



@NgModule({
  declarations: [
    ExerciseOverviewComponent,
    ExerciseDetailComponent,
    ExerciseSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExercisesModule { }
