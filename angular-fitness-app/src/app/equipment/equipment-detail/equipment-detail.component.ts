import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment/equipment-base';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {
  @Input() equipment?: Equipment;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}