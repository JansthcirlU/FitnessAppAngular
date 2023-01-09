import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansComponent } from '../plans/plans.component';
import { EquipmentComponent } from '../equipment/equipment.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  { path: 'equipment', component: EquipmentComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
