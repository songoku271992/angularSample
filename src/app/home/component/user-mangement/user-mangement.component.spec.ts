import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMangementComponent } from './user-mangement.component';

describe('UserMangementComponent', () => {
  let component: UserMangementComponent;
  let fixture: ComponentFixture<UserMangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
