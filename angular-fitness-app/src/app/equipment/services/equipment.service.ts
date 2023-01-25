import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Equipment } from 'src/app/models/equipment/equipment-base';
import { EquipmentSummaryService } from './equipment-summary.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Accessory } from 'src/app/models/equipment/accessory';
import { Bar } from 'src/app/models/equipment/bar';
import { ExerciseMachine } from 'src/app/models/equipment/exercise-machine';
import { FreeWeight } from 'src/app/models/equipment/free-weight';
import { WeightDisc } from 'src/app/models/equipment/weight-disc';

const EQUIPMENTS: Equipment[] = [];

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private equipmentUrl: string = "api/equipment";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private equipmentSummaryService: EquipmentSummaryService) { }

  getEquipmentSummaries(): Observable<string[]> {
    return this.getEquipment()
      .pipe(
        tap(_ => {}), // TODO: do something here?
        // Does this cancel deferred execution?
        map((eq) => eq.map(e => this.equipmentSummaryService.getSummary(e))),
        map((su) => su.map(s => `${s.name} (${s.summary})`)),
        catchError(_ => []) // TODO: do something here
    )
  }

  createAccessory(name: string, description: string): Observable<Equipment> {
    const accessory: Accessory = {
      id: '',
      name: name,
      description: description,
      type: "Accessory"
    };
    return this.addEquipment(accessory);
  }

  createBar(name: string, description: string, diameterMm: number, lengthCm: number): Observable<Equipment> {
    const bar: Bar = {
      id: '',
      name: name,
      description: description,
      type: "Bar",
      diameterMm: diameterMm,
      lengthCm: lengthCm
    };
    return this.addEquipment(bar);
  }

  createExerciseMachine(name: string, description: string): Observable<Equipment> {
    const machine: ExerciseMachine = {
      id: '',
      name: name,
      description: description,
      type: "ExerciseMachine"
    };
    return this.addEquipment(machine);
  }
  
  createFreeWeight(name: string, description: string, massKg: number): Observable<Equipment> {
    const freeWeight: FreeWeight = {
      id: '',
      name: name,
      description: description,
      type: "FreeWeight",
      massKg: massKg
    };
    return this.addEquipment(freeWeight);
  }
  
  createWeightDisc(name: string, description: string, massKg: number, diameterMm: number): Observable<Equipment> {
    const weightDisc: WeightDisc = {
      id: '',
      name: name,
      description: description,
      type: "WeightDisc",
      massKg: massKg,
      diameterMm: diameterMm
    };
    return this.addEquipment(weightDisc);
  }

  deleteEquipment(guid: string): Observable<Equipment> {
    const url = `${this.equipmentUrl}/${guid}`;
    return this.http
      .delete<Equipment>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log("Deleted equipment"))
        // TODO: handle errors
      );
  }

  private addEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http
      .post<Equipment>(this.equipmentUrl, equipment, this.httpOptions)
      .pipe(
        tap(_ => console.log("Added new equipment"))
        // TODO: handle errors
      );
  }

  private getEquipment(): Observable<Equipment[]> {
    const equipment$ = this.http.get<Equipment[]>(this.equipmentUrl);
    return equipment$;
  }
}