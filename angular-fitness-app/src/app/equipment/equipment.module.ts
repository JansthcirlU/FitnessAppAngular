import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentOverviewComponent } from './equipment-overview/equipment-overview.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import { EquipmentSummaryComponent } from './equipment-summary/equipment-summary.component';



@NgModule({
  declarations: [
    EquipmentOverviewComponent,
    EquipmentDetailComponent,
    EquipmentSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquipmentModule { }
