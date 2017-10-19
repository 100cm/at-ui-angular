import {Injectable} from '@angular/core';

export interface Position {
  x: number;
  y: number;
}

@Injectable()
export class AtGlobalMonitorService {

  constructor() {
    this.clickDocumentObserve()
  }

  lastClickPosition: Position = {x: 0, y: 0}

  clickDocumentObserve() {
    document.addEventListener('click', (e) => {
      console.log(e)
      this.lastClickPosition = {
        x: e.clientX,
        y: e.clientY
      }
    })
  }

}
