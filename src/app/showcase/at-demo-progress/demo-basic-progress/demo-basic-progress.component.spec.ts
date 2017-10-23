import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicProgressComponent } from './demo-basic-progress.component';

describe('DemoBasicProgressComponent', () => {
  let component: DemoBasicProgressComponent;
  let fixture: ComponentFixture<DemoBasicProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
