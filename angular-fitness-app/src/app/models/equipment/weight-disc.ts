import { Equipment } from "./equipment-base";

export interface WeightDisc extends Equipment {
    massKg: number,
    diameterMm: number;
}