import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlanNewComponent } from './workout-plan-new.component';

describe('WorkoutPlanNewComponent', () => {
  let component: WorkoutPlanNewComponent;
  let fixture: ComponentFixture<WorkoutPlanNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutPlanNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutPlanNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
