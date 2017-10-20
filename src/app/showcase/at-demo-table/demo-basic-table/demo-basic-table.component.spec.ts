import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicTableComponent } from './demo-basic-table.component';

describe('DemoBasicTableComponent', () => {
  let component: DemoBasicTableComponent;
  let fixture: ComponentFixture<DemoBasicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
