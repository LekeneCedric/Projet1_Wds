import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesQuestionsComponent } from './types-questions.component';

describe('TypesQuestionsComponent', () => {
  let component: TypesQuestionsComponent;
  let fixture: ComponentFixture<TypesQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
