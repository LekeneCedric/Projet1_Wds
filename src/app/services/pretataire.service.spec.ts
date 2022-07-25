import { TestBed } from '@angular/core/testing';

import { PretataireService } from './pretataire.service';

describe('PretataireService', () => {
  let service: PretataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PretataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
