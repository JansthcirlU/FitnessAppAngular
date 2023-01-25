import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navigation-title',
  templateUrl: './navigation-title.component.html',
  styleUrls: ['./navigation-title.component.css']
})
export class NavigationTitleComponent {
  private titleSubject: BehaviorSubject<string | undefined>;
  public get title$(): Observable<string | undefined> {
    return this.titleSubject.asObservable();
  }

  constructor(private router: Router) {
      this.titleSubject = new BehaviorSubject<string | undefined>(undefined);
  }

  onRouteActivated() {
    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
    const title: string | undefined = this.router.titleStrategy?.buildTitle(snapshot);
    this.titleSubject.next(title);
  }
}
