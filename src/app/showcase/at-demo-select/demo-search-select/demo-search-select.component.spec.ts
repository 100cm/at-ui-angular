import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSearchSelectComponent } from './demo-search-select.component';

describe('DemoSearchSelectComponent', () => {
  let component: DemoSearchSelectComponent;
  let fixture: ComponentFixture<DemoSearchSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSearchSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSearchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
