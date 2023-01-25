import { TestBed } from '@angular/core/testing';

import { TimespanService } from './timespan.service';

describe('TimespanService', () => {
  let service: TimespanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimespanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
