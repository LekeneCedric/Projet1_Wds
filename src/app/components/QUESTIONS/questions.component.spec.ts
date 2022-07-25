import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QUESTIONSComponent } from './questions.component';

describe('QUESTIONSComponent', () => {
  let component: QUESTIONSComponent;
  let fixture: ComponentFixture<QUESTIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QUESTIONSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QUESTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
