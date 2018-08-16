import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDropSubmenuComponent } from './at-drop-submenu.component';

describe('AtDropSubmenuComponent', () => {
  let component: AtDropSubmenuComponent;
  let fixture: ComponentFixture<AtDropSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDropSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDropSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
