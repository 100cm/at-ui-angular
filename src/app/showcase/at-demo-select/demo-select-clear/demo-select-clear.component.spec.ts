import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSelectClearComponent } from './demo-select-clear.component';

describe('DemoSelectClearComponent', () => {
  let component: DemoSelectClearComponent;
  let fixture: ComponentFixture<DemoSelectClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSelectClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSelectClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
