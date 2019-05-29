import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AtModalService } from '../../../components/modal/at-modal.service';
import { ModalComponent } from '../../../components/modal';

@Component({
  selector: 'app-demo-service-modal',
  template: `
    <div>
      <button at-button [atType]="'error'" (click)="show('error')">error</button>
      <button at-button [atType]="'warning'" (click)="show('warning')">warning</button>
      <button at-button [atType]="'success'" (click)="show('success')">success</button>
      <button at-button [atType]="'info'" (click)="show('info')">info</button>
      <ng-template #template>
        <div>i am custom template</div>
      </ng-template>
    </div>`,
  styleUrls: ['./demo-service-modal.component.css']
})
export class DemoServiceModalComponent implements OnInit {

  constructor(private atModalService: AtModalService) {
  }

  ngOnInit(): void {
  }

  @ViewChild('template', { static: true }) temp: TemplateRef<void>;

  show(type: 'error' | 'success' | 'info' | 'error' | 'warning'): void {
    this.atModalService.modal({
      atType: 'confirm',
      title: type,
      status: type,
      atOnClose: (ref: ModalComponent) => {
        console.log(ref);
      },
      atAfterClose: () => {
        console.log('after close');
      },
      atComponent: this.temp
    });
  }

}
