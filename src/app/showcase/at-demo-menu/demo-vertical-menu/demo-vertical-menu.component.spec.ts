import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVerticalMenuComponent } from './demo-vertical-menu.component';

describe('DemoVerticalMenuComponent', () => {
  let component: DemoVerticalMenuComponent;
  let fixture: ComponentFixture<DemoVerticalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoVerticalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
