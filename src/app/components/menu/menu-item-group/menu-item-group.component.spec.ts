import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemGroupComponent } from './menu-item-group.component';

describe('MenuItemGroupComponent', () => {
  let component: MenuItemGroupComponent;
  let fixture: ComponentFixture<MenuItemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
