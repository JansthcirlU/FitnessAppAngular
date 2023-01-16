import { TestBed } from '@angular/core/testing';

import { EquipmentSummaryService } from './equipment-summary.service';

describe('EquipmentSummaryService', () => {
  let service: EquipmentSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
