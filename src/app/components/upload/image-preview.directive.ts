import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[image-preview]'
})
export class AtImagePreviewDirective {

  constructor(public _el: ElementRef, public _renderer: Renderer2) {

  }

  @Input('image') image: File;

  ngOnChanges() {
    if (this.image instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this._el.nativeElement.src = e.target.result;
      };
      reader.readAsDataURL(this.image);
    } else {
      this._el.nativeElement.src = this.image;
    }

  }

}
