import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import { EquipmentSummaryComponent } from './equipment-summary/equipment-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { MockDataModule } from '../mock-data/mock-data.module';
import { EquipmentOverviewComponent } from './equipment-overview/equipment-overview.component';
import { EquipmentRoutingModule } from './equipment-routing/equipment-routing.module';
import { EquipmentService } from './services/equipment.service';



@NgModule({
  declarations: [
    EquipmentOverviewComponent,
    EquipmentDetailComponent,
    EquipmentSummaryComponent,
  ],
  imports: [
    EquipmentRoutingModule,
    CommonModule,
    HttpClientModule,
    MockDataModule,
  ],
  providers: [
    EquipmentService
  ]
})
export class EquipmentModule { }
