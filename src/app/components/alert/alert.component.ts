import { animate, state, style, transition, trigger }     from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'at-alert',
  template: `
    <div [@visibilityChanged]="state" *ngIf="!this.closed"
         class="at-alert at-alert--{{atType}}"
         [ngClass]="{'at-alert--with-description': desc}"
    >
      <i *ngIf="icon" class="icon at-alert__icon {{iconType[atType]}}"></i>
      <div class="at-alert__content">
        <p class="at-alert__message">{{message}}</p>
        <p *ngIf="desc" class="at-alert__description">{{desc}}</p>
      </div>
      <i *ngIf="atShowClose" (click)="close()" class="icon at-alert__close"
         [ngClass]="{' at-alert__close--custom':closeText ,'icon-x':!closeText}">
        {{closeText}}
      </i>

    </div>
  `,
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  iconType = {
    'info': 'icon-info',
    'error': 'icon-x-circle',
    'warning': 'icon-alert-circle',
    'success': 'icon-check-circle'
  };

  @Input() message: string;
  @Input() atType: 'info' | 'error' | 'warning' | 'success' = 'info';
  @Input() desc: string;
  @Input() icon: boolean = false;
  @Input() closeText: string;

  private _state: 'shown' | 'hidden' = 'shown';

  get state(): 'shown' | 'hidden' {
    return this._state;
  }

  @Input()
  set state(value: 'shown' | 'hidden') {
    this._state = value;
    if (value === 'hidden') {
      setTimeout(_ => {
        this.closed = true;
        this.onClose.emit(this.closed);
      }, 300);
    }
  }

  closed: boolean = false;

  @Output() readonly onClose: EventEmitter<boolean> = new EventEmitter();

  @Input() atShowClose = true;

  close(): void {
    this._state = 'hidden';
    setTimeout(_ => {
      this.closed = true;
      this.onClose.emit(this.closed);
    }, 300);
  }

}
