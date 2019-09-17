import { Component, DebugElement, TemplateRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AtDividerModule } from '../divider';
import { AtBreadItemComponent } from './breadcrumb-item/at-bread-item.component';
import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  describe('basic', () => {
    let component: AtBreadcrumbTestBasicComponent;
    let fixture: ComponentFixture<AtBreadcrumbTestBasicComponent>;
    let breadcrumb: DebugElement;
    let items: DebugElement[];

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ BreadcrumbComponent, AtBreadItemComponent, AtBreadcrumbTestBasicComponent ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AtBreadcrumbTestBasicComponent);
      component = fixture.componentInstance;
      breadcrumb = fixture.debugElement.query(By.directive(BreadcrumbComponent));
      items = fixture.debugElement.queryAll(By.directive(AtBreadItemComponent));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should bread item work', () => {
      expect(items.every(item => item.nativeElement.children[0].classList.contains('at_breadcrumb__text'))).toBe(true);
      expect(items[0].nativeElement.children[0].innerText).toBe('导航一');
    });

    it('should seperator work', () => {
      expect(items[0].nativeElement.children[1].classList.contains('at-breadcrumb__separator')).toBe(true);
      expect(items[0].nativeElement.children[1].innerText.indexOf('/') > -1).toBe(true);
    });

    it('should separator of last breaditem not display', () => {
      expect(items[2].nativeElement.children.length === 1).toBe(true);
    });
  });

  describe('custom', () => {
    let fixture: ComponentFixture<AtBreadcrumbTestCustomComponent>;
    let items: DebugElement[];

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ BreadcrumbComponent, AtBreadItemComponent, AtBreadcrumbTestCustomComponent ],
        imports: [ AtDividerModule ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AtBreadcrumbTestCustomComponent);
      items = fixture.debugElement.queryAll(By.directive(AtBreadItemComponent));
      fixture.detectChanges();
    });

    it('should custom separator work', () => {
      expect(items[0].query(By.css('at-divider'))).not.toBeNull();
    });
  });
});

@Component({
  template: `
    <at-breadcrumb [separator]="separator">
      <at-bread-item>导航一</at-bread-item>
      <at-bread-item>导航二</at-bread-item>
      <at-bread-item>导航三</at-bread-item>
    </at-breadcrumb>
  `
})
export class AtBreadcrumbTestBasicComponent {
  separator: string | TemplateRef<void> = '/';
}

@Component({
  template: `
    <at-breadcrumb [separator]="separator">
      <at-bread-item>导航一</at-bread-item>
      <at-bread-item>导航二</at-bread-item>
      <at-bread-item>导航三</at-bread-item>
    </at-breadcrumb>
    <ng-template #separator>
      <at-divider [vertical]="true"></at-divider>
    </ng-template>
  `
})
export class AtBreadcrumbTestCustomComponent {
}
