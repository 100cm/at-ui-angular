import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDrawerComponent } from './at-demo-drawer.component';

describe('AtDemoDrawerComponent', () => {
  let component: AtDemoDrawerComponent;
  let fixture: ComponentFixture<AtDemoDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
