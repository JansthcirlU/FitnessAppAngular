import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  
  collapsed: boolean = false;
  
  onToggleMenu() {
    this.collapsed = !this.collapsed;
  }

  onToggleOverlay() {
    
  }
}
