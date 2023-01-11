import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/models/equipment/equipment-base';
import { EquipmentService } from 'src/services/equipment.service';

@Component({
  selector: 'app-equipment-overview',
  templateUrl: './equipment-overview.component.html',
  styleUrls: ['./equipment-overview.component.css']
})
export class EquipmentOverviewComponent implements OnInit {
  // TODO: populate this from service
  equipments: Equipment[] = [];

  constructor(public equipmentService: EquipmentService) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
