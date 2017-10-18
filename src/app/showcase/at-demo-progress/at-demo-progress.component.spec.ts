import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoProgressComponent } from './at-demo-progress.component';

describe('AtDemoProgressComponent', () => {
  let component: AtDemoProgressComponent;
  let fixture: ComponentFixture<AtDemoProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
