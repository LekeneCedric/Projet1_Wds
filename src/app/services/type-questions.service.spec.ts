import { TestBed } from '@angular/core/testing';

import { TypeQuestionsService } from './type-questions.service';

describe('TypeQuestionsService', () => {
  let service: TypeQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
