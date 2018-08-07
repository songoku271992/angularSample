import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLeftMenuComponent } from './post-left-menu.component';

describe('PostLeftMenuComponent', () => {
  let component: PostLeftMenuComponent;
  let fixture: ComponentFixture<PostLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
