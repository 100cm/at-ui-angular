import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicCollapseComponent } from './demo-basic-collapse.component';

describe('DemoBasicCollapseComponent', () => {
  let component: DemoBasicCollapseComponent;
  let fixture: ComponentFixture<DemoBasicCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
