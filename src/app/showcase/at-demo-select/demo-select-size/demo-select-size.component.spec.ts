import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSelectSizeComponent } from './demo-select-size.component';

describe('DemoSelectSizeComponent', () => {
  let component: DemoSelectSizeComponent;
  let fixture: ComponentFixture<DemoSelectSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSelectSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSelectSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
