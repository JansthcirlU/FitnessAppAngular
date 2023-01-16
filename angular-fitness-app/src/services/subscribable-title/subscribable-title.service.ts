import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// Stolen from https://kendaleiv.com/subscribing-to-browser-title-changes-using-angular/
// Can this be automated? (e.g. page as control with bindable title property)
@Injectable({
  providedIn: 'root'
})
export class SubscribableTitleService {

  public title$: BehaviorSubject<string>;

  constructor(private titleService: Title) {
    this.title$ = new BehaviorSubject<string>(titleService.getTitle());
    this.title$.next(''); // Initialise as empty
  }

  setTitle(title: string): void {

    // Set the title value locally
    this.titleService.setTitle(title)

    // Push the new value to the subject
    this.title$.next(title);
  }
}
