import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageTableComponent } from './demo-page-table.component';

describe('DemoPageTableComponent', () => {
  let component: DemoPageTableComponent;
  let fixture: ComponentFixture<DemoPageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
