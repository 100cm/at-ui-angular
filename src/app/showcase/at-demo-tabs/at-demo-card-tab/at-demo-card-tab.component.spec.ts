import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCardTabComponent } from './at-demo-card-tab.component';

describe('AtDemoCardTabComponent', () => {
  let component: AtDemoCardTabComponent;
  let fixture: ComponentFixture<AtDemoCardTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCardTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
