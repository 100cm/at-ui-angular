import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStatusProgressComponent } from './demo-status-progress.component';

describe('DemoStatusProgressComponent', () => {
  let component: DemoStatusProgressComponent;
  let fixture: ComponentFixture<DemoStatusProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStatusProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStatusProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
