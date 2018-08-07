import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftMenuComponent } from './user-left-menu.component';

describe('UserLeftMenuComponent', () => {
  let component: UserLeftMenuComponent;
  let fixture: ComponentFixture<UserLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
