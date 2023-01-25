import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Muscle } from 'src/app/models/muscles/muscle';

@Injectable({
  providedIn: 'root'
})
export class MusclesService {
  
  private musclesUrl: string = "api/muscles";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getMuscles(): Observable<Muscle[]> {
    const muscles$ = this.http
      .get<Muscle[]>(this.musclesUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log("Fetched muscles")),
        catchError(() => [])
      );
    return muscles$;
  }
}
