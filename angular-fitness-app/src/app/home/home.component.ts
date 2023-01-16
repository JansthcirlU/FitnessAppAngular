import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SubscribableTitleService } from 'src/services/subscribable-title/subscribable-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private titleService: SubscribableTitleService) {
    this.titleService.setTitle("Home"); 
  }
}
