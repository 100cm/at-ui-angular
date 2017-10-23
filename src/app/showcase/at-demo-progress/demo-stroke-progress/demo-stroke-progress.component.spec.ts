import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStrokeProgressComponent } from './demo-stroke-progress.component';

describe('DemoStrokeProgressComponent', () => {
  let component: DemoStrokeProgressComponent;
  let fixture: ComponentFixture<DemoStrokeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStrokeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStrokeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
