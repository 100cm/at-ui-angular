import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoSizeTabsComponent } from './at-demo-size-tabs.component';

describe('AtDemoSizeTabsComponent', () => {
  let component: AtDemoSizeTabsComponent;
  let fixture: ComponentFixture<AtDemoSizeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoSizeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoSizeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
