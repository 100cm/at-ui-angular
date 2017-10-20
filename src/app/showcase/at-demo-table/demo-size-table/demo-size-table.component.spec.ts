import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeTableComponent } from './demo-size-table.component';

describe('DemoSizeTableComponent', () => {
  let component: DemoSizeTableComponent;
  let fixture: ComponentFixture<DemoSizeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
