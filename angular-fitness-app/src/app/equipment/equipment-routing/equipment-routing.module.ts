import { NgModule } from '@angular/core';
import { EquipmentOverviewComponent } from '../equipment-overview/equipment-overview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EquipmentOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
