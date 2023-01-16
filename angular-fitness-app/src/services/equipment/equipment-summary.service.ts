import { Injectable } from '@angular/core';
import { Accessory } from 'src/models/equipment/accessory';
import { Bar } from 'src/models/equipment/bar';
import { Equipment } from 'src/models/equipment/equipment-base';
import { ExerciseMachine } from 'src/models/equipment/exercise-machine';
import { FreeWeight } from 'src/models/equipment/free-weight';
import { EquipmentSummary } from 'src/models/equipment/summaries/equipment-summary';
import { WeightDisc } from 'src/models/equipment/weight-disc';

@Injectable({
  providedIn: 'root'
})
export class EquipmentSummaryService {

  constructor() { }

  getSummary(equipment: Equipment): EquipmentSummary {
    const name: string = equipment.name;
    let summary: string;
    switch (equipment.type) {
      case "Accessory":
        summary = this.getAccessorySummary(equipment as Accessory);
        break;
      
      case "Bar":
        summary = this.getBarSummary(equipment as Bar);
        break;

      case "ExerciseMachine":
        summary = this.getExerciseMachineSummary(equipment as ExerciseMachine);
        break;
      
      case "FreeWeight":
        summary = this.getFreeWeightSummary(equipment as FreeWeight);
        break;
      
      case "WeightDisc":
        summary = this.getWeightDiscSummary(equipment as WeightDisc);
        break;
    
      default:
        summary = equipment.description;
        break;
    }
    return { name: name, summary: summary } as EquipmentSummary;
  }

  private getAccessorySummary(accessory: Accessory): string {
    return accessory.description;
  }

  private getBarSummary(bar: Bar): string {
    return `⌀ = ${bar.diameterMm} mm, l = ${bar.lengthCm} cm`
  }

  private getExerciseMachineSummary(machine: ExerciseMachine): string {
    return machine.description;
  }

  private getFreeWeightSummary(weight: FreeWeight): string {
    return `m = ${weight.massKg} kg`;
  }

  private getWeightDiscSummary(disc: WeightDisc): string {
    return `m = ${disc.massKg} kg, ⌀ = ${disc.diameterMm} mm`;
  }
}
