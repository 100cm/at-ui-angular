import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

export interface Position {
  x: number;
  y: number;
}

@Injectable()
export class AtGlobalMonitorService {

  constructor() {
    this.clickDocumentObserve();
  }

  lastClickPosition: Position = {x: 0, y: 0};

  clickDocumentObserve() {
    document.addEventListener('click', (e) => {
      this.lastClickPosition = {
        x: e.clientX,
        y: e.clientY
      };
    });
  }

  $windowScrollEvent: Observable<any> = fromEvent(window, 'scroll');

}
