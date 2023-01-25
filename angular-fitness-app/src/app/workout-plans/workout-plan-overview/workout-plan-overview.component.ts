import { Component, OnInit } from '@angular/core';
import { WorkoutPlanNewFormComponent } from '../workout-plan-new-form/workout-plan-new-form.component';
import { WorkoutPlanSummary } from 'src/app/models/plans/workout-plan-summary';
import { WorkoutPlanService } from '../services/workout-plan.service';
import { OverlayService } from 'src/app/shared/overlay/overlay.service';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-workout-plan-overview',
  templateUrl: './workout-plan-overview.component.html',
  styleUrls: ['./workout-plan-overview.component.css']
})
export class WorkoutPlanOverviewComponent implements OnInit {

  planSummaries: WorkoutPlanSummary[] = [];

  constructor(
    public dialog: MatDialog,
    private workoutPlanService: WorkoutPlanService,
    private overlayService: OverlayService) {
  }

  ngOnInit(): void {
    this.workoutPlanService
      .getWorkoutPlanSummaries()
      .subscribe(summaries => this.planSummaries = summaries);
  }

  onCreateNew() {
    // this.overlayService.show(WorkoutPlanNewFormComponent);
    const dialogRef = this.dialog.open(WorkoutPlanNewFormComponent);
    dialogRef
      .afterClosed()
      .pipe(
        tap(result => { console.log(`Dialog result: ${result}`); })
      ).subscribe();
  }
}
