import { TestBed } from '@angular/core/testing';

import { WorkoutPlanDataService } from './workout-plan-data.service';

describe('WorkoutPlanDataService', () => {
  let service: WorkoutPlanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutPlanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
