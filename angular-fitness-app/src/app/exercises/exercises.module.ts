import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOverviewComponent } from './exercise-overview/exercise-overview.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseSummaryComponent } from './exercise-summary/exercise-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { MockDataModule } from '../mock-data/mock-data.module';
import { ExercisesRoutingModule } from './exercises-routing/exercises-routing.module';



@NgModule({
  declarations: [
    ExerciseOverviewComponent,
    ExerciseDetailComponent,
    ExerciseSummaryComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MockDataModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
