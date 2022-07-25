import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROPOSITIONSComponent } from './propositions.component';

describe('PROPOSITIONSComponent', () => {
  let component: PROPOSITIONSComponent;
  let fixture: ComponentFixture<PROPOSITIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROPOSITIONSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PROPOSITIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
