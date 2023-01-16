import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlanOverviewComponent } from '../workout-plans/workout-plan-overview/workout-plan-overview.component';
import { EquipmentOverviewComponent } from '../equipment/equipment-overview/equipment-overview.component';
import { ExerciseOverviewComponent } from '../exercises/exercise-overview/exercise-overview.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: WorkoutPlanOverviewComponent },
  { path: 'equipment', component: EquipmentOverviewComponent },
  { path: 'exercises', component: ExerciseOverviewComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
