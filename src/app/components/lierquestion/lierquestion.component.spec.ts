import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LierquestionComponent } from './lierquestion.component';

describe('LierquestionComponent', () => {
  let component: LierquestionComponent;
  let fixture: ComponentFixture<LierquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LierquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LierquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
