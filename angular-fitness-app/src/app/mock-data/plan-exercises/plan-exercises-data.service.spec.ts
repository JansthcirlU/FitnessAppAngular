import { TestBed } from '@angular/core/testing';

import { PlanExercisesDataService } from './plan-exercises-data.service';

describe('PlanExercisesDataService', () => {
  let service: PlanExercisesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanExercisesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
