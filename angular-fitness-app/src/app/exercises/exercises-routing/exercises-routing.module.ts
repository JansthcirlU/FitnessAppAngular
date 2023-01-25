import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseOverviewComponent } from '../exercise-overview/exercise-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ExerciseOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
