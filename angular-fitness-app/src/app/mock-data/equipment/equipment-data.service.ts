import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Equipment } from 'src/models/equipment/equipment-base';
import { FreeWeight } from 'src/models/equipment/free-weight';
import { Bar } from 'src/models/equipment/bar';
import { WeightDisc } from 'src/models/equipment/weight-disc';

@Injectable({
  providedIn: 'root'
})
export class EquipmentDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const equipment: Equipment[] = [
      {
        id: crypto.randomUUID(),
        name: 'Kettlebell Decathlon',
        description: 'Cast-iron ball with handle welded to the top, purchased from Decathlon',
        type: "FreeWeight",
        massKg: 12
      } as FreeWeight,
      {
        id: crypto.randomUUID(),
        name: 'Olympic Weight Training Bar',
        description: 'Weight Training Bar compliant with Olympic standards. Maximum load of 280 kg',
        type: "Bar",
        diameterMm: 50,
        lengthCm: 220
      } as Bar,
      {
        id: crypto.randomUUID(),
        name: 'Weight Training Disc 5 kg',
        description: 'Weight Training Disc for weight training at home, compliant with Olympic standard',
        type: "WeightDisc",
        massKg: 5,
        diameterMm: 50
      } as WeightDisc,
      {
        id: crypto.randomUUID(),
        name: 'Weight Training Disc 5 kg',
        description: 'Weight Training Disc for weight training at home, compliant with Olympic standard',
        type: "WeightDisc",
        massKg: 5,
        diameterMm: 50
      } as WeightDisc,
      {
        id: crypto.randomUUID(),
        name: 'Weight Training Disc 2 kg',
        description: 'Weight Training Disc for weight training at home, compliant with Olympic standard',
        type: "WeightDisc",
        massKg: 2,
        diameterMm: 50
      } as WeightDisc,
      {
        id: crypto.randomUUID(),
        name: 'Weight Training Disc 2 kg',
        description: 'Weight Training Disc for weight training at home, compliant with Olympic standard',
        type: "WeightDisc",
        massKg: 2,
        diameterMm: 50
      } as WeightDisc
    ];
    return {equipment};
  }

  genId(equipment: Equipment[]): string {
    return crypto.randomUUID();
  }
}
