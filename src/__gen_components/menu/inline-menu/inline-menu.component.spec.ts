import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineMenuComponent } from './inline-menu.component';

describe('InlineMenuComponent', () => {
  let component: InlineMenuComponent;
  let fixture: ComponentFixture<InlineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
