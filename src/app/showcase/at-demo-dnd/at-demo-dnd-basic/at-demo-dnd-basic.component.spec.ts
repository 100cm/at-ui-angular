import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDndBasicComponent } from './at-demo-dnd-basic.component';

describe('AtDemoDndBasicComponent', () => {
  let component: AtDemoDndBasicComponent;
  let fixture: ComponentFixture<AtDemoDndBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDndBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDndBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
