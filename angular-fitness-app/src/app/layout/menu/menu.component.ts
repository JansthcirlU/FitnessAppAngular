import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  collapsed: boolean = false;
  onToggleMenu() {
    this.collapsed = !this.collapsed;
  }
}
