import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilanceStateComponent } from './vigilance-state.component';

describe('VigilanceStateComponent', () => {
  let component: VigilanceStateComponent;
  let fixture: ComponentFixture<VigilanceStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigilanceStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilanceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
