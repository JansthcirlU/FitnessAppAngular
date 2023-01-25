import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';

@Component({
  selector: 'app-equipment-overview',
  templateUrl: './equipment-overview.component.html',
  styleUrls: ['./equipment-overview.component.css']
})
export class EquipmentOverviewComponent implements OnInit {
  // TODO: populate this from service
  equipmentSummaries: string[] = [];

  constructor(
    private equipmentService: EquipmentService) {
  }

  ngOnInit(): void {
    this.equipmentService
      .getEquipmentSummaries()
      .subscribe(summaries => this.equipmentSummaries = summaries)
  }
}
