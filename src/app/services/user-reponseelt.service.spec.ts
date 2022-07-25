import { TestBed } from '@angular/core/testing';

import { UserReponseeltService } from './user-reponseelt.service';

describe('UserReponseeltService', () => {
  let service: UserReponseeltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReponseeltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
