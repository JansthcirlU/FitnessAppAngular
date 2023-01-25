import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'plans', title: 'My Workout Plans', loadChildren: () => import('../workout-plans/workout-plans.module').then(m => m.WorkoutPlansModule) },
  { path: 'equipment', title: 'My Equipment', loadChildren: () => import('../equipment/equipment.module').then(m => m.EquipmentModule) },
  { path: 'exercises', title: 'Exercises', loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesModule) },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
