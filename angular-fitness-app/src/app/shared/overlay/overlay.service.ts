import { Component, Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { 
    this.componentTypeToShow$ = new Subject<Type<Component>>();
  }

  private componentTypeToShow$: Subject<Type<Component>>;
  public get componentTypeToShow(): Observable<Type<Component>> {
    return this.componentTypeToShow$.asObservable();
  }

  private isOpen: boolean = false;
  public get open(): boolean {
    return this.isOpen;
  }

  /**
   * Opens the overlay and displays something.
   */
  show(component: Type<any>): void {
    debugger;
    if (this.isOpen) throw new Error(`Overlay is already open, cannot show a new overlay.`);

    this.componentTypeToShow$.next(component);
    this.isOpen = true;
  }

  /**
   * Disposes the displayed content and closes the overlay.
   */
  hide(): void {
    this.isOpen = false;
  }
}
