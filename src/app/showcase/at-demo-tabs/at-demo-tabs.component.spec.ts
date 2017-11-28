import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTabsComponent } from './at-demo-tabs.component';

describe('AtDemoTabsComponent', () => {
  let component: AtDemoTabsComponent;
  let fixture: ComponentFixture<AtDemoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
