import { Equipment } from "./equipment-base";

export interface Bar extends Equipment {
    diameterMm: number,
    lengthCm: number;
}