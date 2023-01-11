import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanOverviewComponent } from './workout-plan-overview.component';

describe('WorkoutPlanOverviewComponent', () => {
  let component: WorkoutPlanOverviewComponent;
  let fixture: ComponentFixture<WorkoutPlanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutPlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
