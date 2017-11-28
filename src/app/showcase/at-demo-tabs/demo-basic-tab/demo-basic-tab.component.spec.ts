import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicTabComponent } from './demo-basic-tab.component';

describe('DemoBasicTabComponent', () => {
  let component: DemoBasicTabComponent;
  let fixture: ComponentFixture<DemoBasicTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
