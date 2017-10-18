import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTableComponent } from './at-demo-table.component';

describe('AtDemoTableComponent', () => {
  let component: AtDemoTableComponent;
  let fixture: ComponentFixture<AtDemoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
