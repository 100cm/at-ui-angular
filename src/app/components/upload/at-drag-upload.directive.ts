import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[at-drag-upload]'
})
export class AtDragUploadDirective {

  @Output() uploadFile: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  onFileDrop(e: DragEvent): void {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }
    const files: File[] = Array.prototype.slice.call(e.dataTransfer.files);
    if (files.length) {
      this.uploadFile.emit(files);
    }
    e.preventDefault();
  }

  constructor() {
  }

}
