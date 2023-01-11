import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlanOverviewComponent } from '../workout-plans/workout-plan-overview/workout-plan-overview.component';
import { EquipmentOverviewComponent } from '../equipment/equipment-overview/equipment-overview.component';

const routes: Routes = [
  { path: 'plans', component: WorkoutPlanOverviewComponent },
  { path: 'equipment', component: EquipmentOverviewComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
