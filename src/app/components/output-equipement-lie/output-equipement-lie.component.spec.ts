import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEquipementLieComponent } from './output-equipement-lie.component';

describe('OutputEquipementLieComponent', () => {
  let component: OutputEquipementLieComponent;
  let fixture: ComponentFixture<OutputEquipementLieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputEquipementLieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputEquipementLieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
