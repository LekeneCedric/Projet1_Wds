import { TestBed } from '@angular/core/testing';

import { VigilanceService } from './vigilance.service';

describe('VigilanceService', () => {
  let service: VigilanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VigilanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
