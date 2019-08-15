import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu.component';

@Component({
  selector: '[at-menu-group]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li *ngIf="label" class="at-menu__item-group-title">{{label}}</li>
    <ul class="at-menu__item-group-list">
      <ng-content></ng-content>
    </ul>
  `
})
export class MenuItemGroupComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  inline = true;

  constructor(@Inject(MenuComponent) public parent: MenuComponent) {
  }

  ngOnInit(): void {
  }

  @HostBinding('class.at-menu__item-group')
  get drop_down(): boolean {
    return this.parent.atType !== 'inline';
  }

}
