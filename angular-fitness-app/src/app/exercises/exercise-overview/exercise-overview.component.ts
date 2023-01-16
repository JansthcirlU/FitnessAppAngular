import { Component } from '@angular/core';
import { SubscribableTitleService } from 'src/services/subscribable-title/subscribable-title.service';

@Component({
  selector: 'app-exercise-overview',
  templateUrl: './exercise-overview.component.html',
  styleUrls: ['./exercise-overview.component.css']
})
export class ExerciseOverviewComponent {
  constructor(private titleService: SubscribableTitleService) {
    this.titleService.setTitle("Exercises");
  }
}
