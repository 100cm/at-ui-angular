import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSelectMultipleComponent } from './demo-select-multiple.component';

describe('DemoSelectMultipleComponent', () => {
  let component: DemoSelectMultipleComponent;
  let fixture: ComponentFixture<DemoSelectMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSelectMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
