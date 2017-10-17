import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoComponentsComponent } from './at-demo-components.component';

describe('AtDemoComponentsComponent', () => {
  let component: AtDemoComponentsComponent;
  let fixture: ComponentFixture<AtDemoComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
