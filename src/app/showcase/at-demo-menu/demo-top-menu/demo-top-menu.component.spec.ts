import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTopMenuComponent } from './demo-top-menu.component';

describe('DemoTopMenuComponent', () => {
  let component: DemoTopMenuComponent;
  let fixture: ComponentFixture<DemoTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
