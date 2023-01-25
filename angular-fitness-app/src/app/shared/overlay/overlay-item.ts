import { Type } from '@angular/core';
import { EmptyComponent } from '../empty/empty.component';

export class OverlayItem {
    constructor(public component: Type<any>) {
        
    }

    static get Empty(): OverlayItem {
        return new OverlayItem(EmptyComponent);
    }
}