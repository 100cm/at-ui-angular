import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInlineMenuComponent } from './demo-inline-menu.component';

describe('DemoInlineMenuComponent', () => {
  let component: DemoInlineMenuComponent;
  let fixture: ComponentFixture<DemoInlineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInlineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInlineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
