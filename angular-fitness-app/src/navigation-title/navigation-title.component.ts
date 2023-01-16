import { Component, Input, OnInit } from '@angular/core';
import { SubscribableTitleService } from 'src/services/subscribable-title/subscribable-title.service';

@Component({
  selector: 'app-navigation-title',
  templateUrl: './navigation-title.component.html',
  styleUrls: ['./navigation-title.component.css']
})
export class NavigationTitleComponent implements OnInit {
  @Input() appName?: string = "App";
  title?: string;
  name?: string;

  constructor(private titleSub: SubscribableTitleService) {
  }

  ngOnInit() {
    this.titleSub.title$
      .subscribe(title => this.title = title);
  }
}
