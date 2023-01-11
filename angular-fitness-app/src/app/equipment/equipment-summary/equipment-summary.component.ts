import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/models/equipment/equipment-base';

@Component({
  selector: 'app-equipment-summary',
  templateUrl: './equipment-summary.component.html',
  styleUrls: ['./equipment-summary.component.css']
})
export class EquipmentSummaryComponent implements OnInit {
  @Input() equipment?: Equipment;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}