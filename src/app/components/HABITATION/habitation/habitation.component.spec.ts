import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitationComponent } from './habitation.component';

describe('HabitationComponent', () => {
  let component: HabitationComponent;
  let fixture: ComponentFixture<HabitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
