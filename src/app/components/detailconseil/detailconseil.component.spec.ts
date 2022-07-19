import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailconseilComponent } from './detailconseil.component';

describe('DetailconseilComponent', () => {
  let component: DetailconseilComponent;
  let fixture: ComponentFixture<DetailconseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailconseilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailconseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
