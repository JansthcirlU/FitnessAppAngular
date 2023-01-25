import { Component } from '@angular/core';
import { WorkoutPlanNewComponent } from 'src/app/workout-plans/workout-plan-new/workout-plan-new.component';
import { OverlayService } from 'src/shared/overlay/overlay.service';

@Component({
  selector: 'app-navigation-bar-plans',
  templateUrl: './navigation-bar-plans.component.html',
  styleUrls: ['./navigation-bar-plans.component.css']
})
export class NavigationBarPlansComponent {
  
  constructor(private overlayService: OverlayService) {

  }

  onClick() {
    // this.overlayService.show(WorkoutPlanNewComponent);
  }
}
