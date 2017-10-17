import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoLayoutComponent } from './at-demo-layout.component';

describe('AtDemoLayoutComponent', () => {
  let component: AtDemoLayoutComponent;
  let fixture: ComponentFixture<AtDemoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
