import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEnvironnementComponent } from './output-environnement.component';

describe('OutputEnvironnementComponent', () => {
  let component: OutputEnvironnementComponent;
  let fixture: ComponentFixture<OutputEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputEnvironnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
