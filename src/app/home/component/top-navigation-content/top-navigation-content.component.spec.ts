import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationContentComponent } from './top-navigation-content.component';

describe('TopNavigationContentComponent', () => {
  let component: TopNavigationContentComponent;
  let fixture: ComponentFixture<TopNavigationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavigationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
