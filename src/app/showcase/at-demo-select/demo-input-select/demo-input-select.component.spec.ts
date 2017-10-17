import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputSelectComponent } from './demo-input-select.component';

describe('DemoInputSelectComponent', () => {
  let component: DemoInputSelectComponent;
  let fixture: ComponentFixture<DemoInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
