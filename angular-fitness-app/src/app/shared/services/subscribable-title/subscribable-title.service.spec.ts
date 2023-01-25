import { TestBed } from '@angular/core/testing';

import { SubscribableTitleService } from './subscribable-title.service';

describe('SubscribableTitleService', () => {
  let service: SubscribableTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribableTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
