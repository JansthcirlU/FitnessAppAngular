import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanNewFormComponent } from './workout-plan-new-form.component';

describe('WorkoutPlanNewFormComponent', () => {
  let component: WorkoutPlanNewFormComponent;
  let fixture: ComponentFixture<WorkoutPlanNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutPlanNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
