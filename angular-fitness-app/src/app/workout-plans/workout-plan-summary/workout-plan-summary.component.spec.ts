import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanSummaryComponent } from './workout-plan-summary.component';

describe('WorkoutPlanSummaryComponent', () => {
  let component: WorkoutPlanSummaryComponent;
  let fixture: ComponentFixture<WorkoutPlanSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutPlanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
