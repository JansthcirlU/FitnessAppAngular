import { Component, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { OverlayDirective } from './dynamic.directive';
import { OverlayService } from './overlay.service';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnDestroy {
  @ViewChild(OverlayDirective, { static: true }) private dynamicHost!: OverlayDirective;

  private overlaySubscription: Subscription;

  constructor(private overlayService: OverlayService) {
    this.overlaySubscription = this.overlayService.componentTypeToShow
    .pipe(
      tap((c: Type<any>) => {
        this.dynamicHost.viewContainerRef.createComponent(c)
      })
    ).subscribe();
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.overlaySubscription.unsubscribe();
  }

  get percentage(): number {
    return this.overlayService.open
      ? 100
      : 0;
  }
  
  closeOverlay() {
    this.dynamicHost.viewContainerRef.clear();
    this.overlayService.hide();
  }
}
