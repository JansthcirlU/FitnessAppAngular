import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/models/equipment/equipment-base';
import { EquipmentService } from 'src/services/equipment/equipment.service';
import { SubscribableTitleService } from 'src/services/subscribable-title/subscribable-title.service';

@Component({
  selector: 'app-equipment-overview',
  templateUrl: './equipment-overview.component.html',
  styleUrls: ['./equipment-overview.component.css']
})
export class EquipmentOverviewComponent implements OnInit {
  // TODO: populate this from service
  equipmentSummaries: string[] = [];

  constructor(
    private equipmentService: EquipmentService,
    private titleService: SubscribableTitleService) {
    this.titleService.setTitle("My Equipment"); 
  }

  ngOnInit(): void {
    this.equipmentService
      .getEquipmentSummaries()
      .subscribe(summaries => this.equipmentSummaries = summaries)
  }
}
