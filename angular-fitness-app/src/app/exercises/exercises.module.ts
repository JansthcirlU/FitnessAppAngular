import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOverviewComponent } from './exercise-overview/exercise-overview.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseSummaryComponent } from './exercise-summary/exercise-summary.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ExerciseDataService } from 'src/mock-data/exercise/exercise-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ExerciseOverviewComponent,
    ExerciseDetailComponent,
    ExerciseSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ExerciseDataService, { dataEncapsulation: false }
    )
  ]
})
export class ExercisesModule { }
