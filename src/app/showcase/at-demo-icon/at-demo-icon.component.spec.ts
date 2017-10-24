import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoIconComponent } from './at-demo-icon.component';

describe('AtDemoIconComponent', () => {
  let component: AtDemoIconComponent;
  let fixture: ComponentFixture<AtDemoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
