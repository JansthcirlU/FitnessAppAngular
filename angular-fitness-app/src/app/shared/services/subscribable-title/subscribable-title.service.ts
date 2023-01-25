import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// Stolen from https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
// Can this be automated? (e.g. page as control with bindable title property)
@Injectable({
  providedIn: 'root'
})
export class SubscribableTitleService {

  private titleSubject: BehaviorSubject<string>;
  public get title$(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  constructor(private titleService: Title) {
    this.titleSubject = new BehaviorSubject<string>(titleService.getTitle());
    this.titleSubject.next(''); // Initialise as empty
  }

  setTitle(title: string): void {

    // Set the title value locally
    this.titleService.setTitle(title)

    // Push the new value to the subject
    this.titleSubject.next(title);
  }
}
