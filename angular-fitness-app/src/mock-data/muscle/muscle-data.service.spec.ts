import { TestBed } from '@angular/core/testing';

import { MuscleDataService } from './muscle-data.service';

describe('MuscleDataService', () => {
  let service: MuscleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuscleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
