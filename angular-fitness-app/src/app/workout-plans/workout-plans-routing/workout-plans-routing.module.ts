import { NgModule } from '@angular/core';
import { WorkoutPlanOverviewComponent } from '../workout-plan-overview/workout-plan-overview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPlanOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutPlansRoutingModule { }
