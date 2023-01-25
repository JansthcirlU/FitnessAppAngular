import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Exercise } from 'src/app/models/exercises/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercisesUrl: string = "api/exercises/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getExerciseById(guid: string): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${guid}`;
    return this.http
      .get<Exercise>(url)
      .pipe(
        tap(_ => console.log(`Fetching exercise with id = ${guid}`))
      );
  }

  getExercises(): Observable<Exercise[]> {
    return this.http
      .get<Exercise[]>(this.exercisesUrl, this.httpOptions)
      .pipe(
        tap(_ => console.log("Fetching exercises"))
      );
  }

  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http
      .post<Exercise>(this.exercisesUrl, exercise, this.httpOptions)
      .pipe(
        tap(_ => console.log("Added new exercise"))
        // TODO: handle errors
      );
  }

  deleteExercise(guid: string): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${guid}`;
    return this.http
      .delete<Exercise>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log("Deleted exercise"))
        // TODO: handle errors
        // must only allow uesr to delete custom exercises (i.e. not the default ones)
      )
  }
}
