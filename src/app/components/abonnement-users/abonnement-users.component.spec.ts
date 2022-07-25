import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementUsersComponent } from './abonnement-users.component';

describe('AbonnementUsersComponent', () => {
  let component: AbonnementUsersComponent;
  let fixture: ComponentFixture<AbonnementUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonnementUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
