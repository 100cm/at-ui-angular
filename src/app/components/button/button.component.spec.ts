import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AtButtonShape, AtButtonSize, AtButtonType, ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: AtButtonTestComponent;
  let fixture: ComponentFixture<AtButtonTestComponent>;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent, AtButtonTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtButtonTestComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.directive(ButtonComponent)).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should type work', () => {
    const types: AtButtonType[] = ['default', 'primary', 'success', 'error', 'warning', 'info', 'text'];
    types.forEach(type => {
      component.type = type;
      fixture.detectChanges();
      expect(button.classList.contains(`at-btn--${type}`)).toBe(true);
    });
  });

  it('should size work', () => {
    const sizes: AtButtonSize[] = ['small', 'large', 'smaller'];
    sizes.forEach(size => {
      component.size = size;
      fixture.detectChanges();
      expect(button.classList.contains(`at-btn--${size}`)).toBe(true);
    });
  });

  it('should ', () => {

  });
});

@Component({
  template: `
    <button at-button [atType]="type" [size]="size" [atShape]="atShape" [atIcon]="icon" [iconLoading]="iconLoading"></button>
  `
})
export class AtButtonTestComponent {
  type: AtButtonType = 'default';
  size: AtButtonSize;
  hollow: boolean = false;
  icon: string;
  iconLoading: boolean = false;
  atShape: AtButtonShape;
}
