import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertComponent } from './alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AlertComponent', () => {
  let component: AlertTestBasicComponent;
  let fixture: ComponentFixture<AlertTestBasicComponent>;
  let alert: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent, AlertTestBasicComponent ],
      imports: [ BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTestBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alert = fixture.debugElement.query(By.directive(AlertComponent));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should message work', () => {
    expect(alert.nativeElement.querySelector('.at-alert__message').innerHTML).toBe('message');
    component.message = 'message_changed';
    fixture.detectChanges();
    expect(alert.nativeElement.querySelector('.at-alert__message').innerHTML).toBe('message_changed');
  });

  it('should description work', () => {
    expect(alert.nativeElement.querySelector('.at-alert__description').innerHTML).toBe('description');
    component.desc = 'description_changed';
    fixture.detectChanges();
    expect(alert.nativeElement.querySelector('.at-alert__description').innerHTML).toBe('description_changed');
  });

  it('should type work', () => {
    const totalTypes: string[] = ['info', 'success', 'error', 'warning'];
    totalTypes.forEach(type => {
      component.atType = type;
      fixture.detectChanges();
      expect(alert.nativeElement.querySelector('.at-alert').classList).toContain(`at-alert--${type}`);
    });
  });

  it('should icon work', () => {
    component.icon = true;
    const totalTypes: string[] = ['info', 'success', 'error', 'warning'];
    const iconType = {
      'info': 'icon-info',
      'error': 'icon-x-circle',
      'warning': 'icon-alert-circle',
      'success': 'icon-check-circle'
    };
    totalTypes.forEach(type => {
      component.atType = type;
      fixture.detectChanges();
      expect(alert.nativeElement.querySelector('.at-alert__icon').classList).toContain(iconType[type]);
    });
  });

  it('should closeText work', () => {
    expect(alert.nativeElement.querySelector('.at-alert__close').classList).toContain('icon-x');
    component.closeText = 'closeText';
    fixture.detectChanges();
    expect(alert.nativeElement.querySelector('.at-alert__close').innerHTML.trim()).toBe('closeText');
    expect(alert.nativeElement.querySelector('.at-alert__close').classList).toContain('at-alert__close--custom');
  });

  it('should close work', fakeAsync(() => {
    alert.nativeElement.querySelector('.at-alert__close').click();
    fixture.detectChanges();
    tick(300);
    expect(alert.nativeElement.innerText).toBe('');
  }));
});

@Component({
  template: `
    <at-alert
      [message]="message"
      [atType]="atType"
      [desc]="desc"
      [icon]="icon"
      [closeText]="closeText"
      (onClose)="onClose">
    </at-alert>
  `
})
export class AlertTestBasicComponent {
  message: string = 'message';
  atType: string = 'info';
  desc: string = 'description';
  icon: boolean = false;
  closeText: string;
  onClose = jasmine.createSpy('close callback');
}
