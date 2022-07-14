import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEquipementComponent } from './output-equipement.component';

describe('OutputEquipementComponent', () => {
  let component: OutputEquipementComponent;
  let fixture: ComponentFixture<OutputEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputEquipementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
