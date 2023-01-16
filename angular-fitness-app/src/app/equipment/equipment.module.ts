import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentOverviewComponent } from './equipment-overview/equipment-overview.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import { EquipmentSummaryComponent } from './equipment-summary/equipment-summary.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EquipmentDataService } from 'src/mock-data/equipment/equipment-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EquipmentOverviewComponent,
    EquipmentDetailComponent,
    EquipmentSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      EquipmentDataService, { dataEncapsulation: false }
    )
  ]
})
export class EquipmentModule { }
