import { TestBed } from '@angular/core/testing';

import { AbonnementHistoriqueService } from './abonnement-historique.service';

describe('AbonnementHistoriqueService', () => {
  let service: AbonnementHistoriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonnementHistoriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
