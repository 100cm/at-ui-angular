import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtBadgeModule } from './at-badge-module';

import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeTestBasicComponent;
  let fixture: ComponentFixture<BadgeTestBasicComponent>;
  let badge: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeTestBasicComponent ],
      imports: [ AtBadgeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTestBasicComponent);
    component = fixture.componentInstance;
    badge = fixture.debugElement.query(By.directive(BadgeComponent)).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should value work', () => {
    expect(badge.querySelector('sup').innerHTML).toBe('9');
    component.value = 'new';
    fixture.detectChanges();
    expect(badge.querySelector('sup').innerHTML).toBe('new');
  });

  it('should dot work', () => {
    expect(badge.querySelector('sup').classList).not.toContain('at-badge--dot');
    component.dot = true;
    fixture.detectChanges();
    expect(badge.querySelector('sup').classList).toContain('at-badge--dot');
  });

  it('should type work', () => {
    const types: Array<'info' | 'warning' | 'error' | 'success'> = ['info', 'warning', 'error', 'success'];
    types.forEach(type => {
      component.type = type;
      fixture.detectChanges();
      expect(badge.querySelector('.at-badge').classList).toContain(`at-badge--${type}`);
    });
  });

  it('should max work', () => {
    component.max = 10;
    fixture.detectChanges();
    expect(badge.querySelector('sup').innerHTML).toBe('9');
    component.max = 9;
    fixture.detectChanges();
    expect(badge.querySelector('sup').innerHTML).not.toBe('9+');
    component.value = 100;
    fixture.detectChanges();
    expect(badge.querySelector('sup').innerHTML).toBe('9+');
  });

  it('should show work', () => {
    component.show = false;
    fixture.detectChanges();
    expect(badge.querySelector('sup')).toBeNull();
  });

  it('should negative number not display', () => {
    component.value = -5;
    fixture.detectChanges();
    expect(badge.querySelector('sup')).toBeNull();
  });

  it('should inner work', () => {

    expect(badge.querySelector('.at-badge span').querySelector('a')).toBeNull();
    component.inner = true;
    fixture.detectChanges();
    expect(badge.querySelector('.at-badge span').querySelector('a')).not.toBeNull();
  });
});

@Component({
  template: `
    <at-badge [atValue]="value" [max]="max" [dot]="dot" [show]="show" [atType]="type">
      <a *ngIf="inner"></a>
    </at-badge>
  `
})
export class BadgeTestBasicComponent {
  value: string | number = 9;
  max: number;
  dot: boolean = false;
  type: 'info' | 'warning' | 'error' | 'success' = 'info';
  show: boolean = true;
  inner: boolean = false;
}
