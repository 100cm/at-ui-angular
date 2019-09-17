import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, fakeAsync, inject, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from '../input';
import { AutoCompleteComponent } from './autocomplete.component';
import { AutoCompleteModule } from './autocomplete.module';

describe('CheckboxGroupComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteTestBasicComponent, InputComponent ],
      imports: [ AutoCompleteModule, FormsModule, BrowserAnimationsModule ]
    })
      .compileComponents();
  }));

  describe('', () => {
    let component: AutocompleteTestBasicComponent;
    let fixture: ComponentFixture<AutocompleteTestBasicComponent>;
    let input: HTMLInputElement;
    let autocomplete: DebugElement;

    let overlayContainer: OverlayContainer;
    let overlayContainerElement: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AutocompleteTestBasicComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
      input = fixture.debugElement.nativeElement.querySelector('input');
      autocomplete = fixture.debugElement.query(By.directive(AutoCompleteComponent));

      inject([OverlayContainer], (oc: OverlayContainer) => {
        overlayContainer = oc;
        overlayContainerElement = oc.getContainerElement();
      })();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should open the panel when focus', () => {
      expect(component.panel.atOpen).toBe(false);
      input.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(true);
    });

    it('should close the panel when input is empty', () => {
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(true);
      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(false);
    });

    it('should close the panel when focusout', () => {
      expect(component.panel.atOpen).toBe(false);
      input.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(true);
      input.dispatchEvent(new Event('focusout'));
      component.panel.close();
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(false);
    });

    it('should close the panel when click an option', fakeAsync(() => {
      input.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      expect(component.panel.atOpen).toBe(true);
      const option = overlayContainerElement.querySelector('li');
      option.click();
      fixture.detectChanges();
      tick(500);
      expect(component.panel.atOpen).toBe(false);
    }));

    it('should highlight matched part', () => {
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      const options = overlayContainerElement.querySelectorAll('li');
      options.forEach(ele => {
        if (ele.querySelector('span')) {
          expect(ele.querySelector('span').innerHTML).toBe(input.value);
        }
      });
    });

    it('should update input value when select an option', fakeAsync(() => {
      input.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      overlayContainerElement.querySelector('li').click();
      fixture.detectChanges();
      tick(500);
      expect(input.value).toBe('ab');
    }));
  });
});

@Component({
  template: `
    <div>
      <atInput [(ngModel)]="inputValue" [atAutoComplete]="auto"></atInput>
      <at-auto-complete #auto [atDataSource]="options"></at-auto-complete>
    </div>
  `
})
class AutocompleteTestBasicComponent {
  options = ['ab', 'a123', 'dcba', 're1f'];
  inputValue = '';

  @ViewChild(AutoCompleteComponent, {static: false}) panel: AutoCompleteComponent;

  constructor() {
  }
}
