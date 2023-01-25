import { TestBed } from '@angular/core/testing';

import { EquipmentDataService } from './equipment-data.service';

describe('EquipmentDataService', () => {
  let service: EquipmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
