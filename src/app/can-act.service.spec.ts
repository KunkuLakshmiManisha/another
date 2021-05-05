import { TestBed } from '@angular/core/testing';

import { CanActService } from './can-act.service';

describe('CanActService', () => {
  let service: CanActService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
