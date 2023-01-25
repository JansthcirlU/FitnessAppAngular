import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamic]'
})
export class OverlayDirective {

  constructor(
    public viewContainerRef: ViewContainerRef) {
  }
}
