import { TestBed } from '@angular/core/testing';

import { AbonnementSearchService } from './abonnement-search.service';

describe('AbonnementSearchService', () => {
  let service: AbonnementSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonnementSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
