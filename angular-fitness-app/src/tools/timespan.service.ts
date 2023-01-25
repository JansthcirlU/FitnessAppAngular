import { Injectable } from '@angular/core';

const secondsPerMinute: number = 60;
const minutesPerHour: number = 60;
const hoursPerDay: number = 24;
const secondsPerHour: number = secondsPerMinute * minutesPerHour;
const secondsPerDay: number = secondsPerHour * hoursPerDay;

@Injectable({
  providedIn: 'root'
})
export class TimespanService {

  constructor() { }

  // Is there a library to do this?
  secondsToTimeString(totalSeconds?: number): string {
    if (!totalSeconds) return `"00:00:00"`;

    let totalSecondsRemaining = totalSeconds;

    // Get whole number of days represented by the time
    const days: number = Math.floor(totalSecondsRemaining / secondsPerDay);
    const daysString: string = String(days);
    totalSecondsRemaining -= days * secondsPerDay

    // Get whole number of hours represented by the time
    const hours: number = Math.floor(totalSecondsRemaining / secondsPerHour);
    const hoursString: string = String(hours).padStart(2, '0');
    totalSecondsRemaining -= hours * secondsPerHour;
    
    // Get whole number of minutes represented by the time
    const minutes: number = Math.floor(totalSecondsRemaining / secondsPerMinute);
    const minutesString: string = String(minutes).padStart(2, '0');
    totalSecondsRemaining -= minutes * secondsPerMinute;
    
    // Round down remaining seconds to the nearest integer value
    const seconds: number = Math.floor(totalSecondsRemaining);
    const secondsString: string = String(seconds).padStart(2, '0');
    const timeString: string = `"${daysString}.${hoursString}:${minutesString}:${secondsString}"`;
    
    return timeString;
  }
}
