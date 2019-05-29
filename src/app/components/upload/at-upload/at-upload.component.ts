import { forwardRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR }                                           from '@angular/forms';
import { isNotNil }                                                    from '../../utils/class-helper';

@Component({
  selector: 'at-upload',
  template: `

    <div *ngIf="atType == 'picture'" class="at-upload-files-avatar">
      <div at-upload-list class="at-upload-files-avatar-item" *ngFor="let item of _files;let i = index">
        <div class="at-upload-files-avatar-item-info">
          <img class="at-upload-files-avatar-preview" image-preview [image]="item">
        </div>
        <span class="at-upload-files-avatar-actions">
            <a (click)="previewImage(i)"><i class="icon icon-eye"></i></a>
          <a (click)="removeFile(i)"><i class="icon icon-trash-2"></i></a>
        </span>

      </div>
    </div>

    <div class="at-upload at-upload--{{atType}}">
      <div class="at-upload-container " at-drag-upload (uploadFile)="dragFile($event)"
           (click)="triggerUpload()">
        <ng-content></ng-content>
      </div>
      <input #file_input type="file" [multiple]="multiple" (change)="fileChange($event)"
             style="display: none">
    </div>

    <div *ngIf="atType == 'text'" class="at-upload-files">
      <div at-upload-list class="at-upload-files-item" *ngFor="let item of _files;let i = index">
        <div class="at-upload-files-item-info">
            <span><i class="icon icon-file icon-left"></i><a
              class="at-upload-files-item-file-name">{{item.name}}</a></span>
        </div>
        <i (click)="removeFile(i)" class="icon icon-x icon-right"></i>
      </div>
    </div>

    <!--<at-modal [showFooter]="false" [showHeader]="false" [show]="preview" (onOk)="preview = false"-->
    <!--(onCancel)="preview=false">-->
    <!--<div body class="at-upload-preview-modal">-->
    <!--<img style="max-width: 100%;max-height: 100%" image-preview [image]="preview_image"/>-->
    <!--</div>-->
    <!--</at-modal>-->
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AtUploadComponent),
    multi: true
  }]
})
export class AtUploadComponent implements OnInit {

  constructor() {
  }

  @ViewChild('file_input', { static: true }) fileEle: ElementRef;

  @Input() multiple = true;

  @Input() atType = 'text';

  preview = false;

  preview_image;

  private _files = [];

  get files(): any[] {
    return this._files;
  }

  set files(value: any[]) {
    this._files = value;
  }

  ngOnInit() {
  }

  previewImage(i) {
    this.preview_image = this.files[i];
    this.preview = true;
  }

  triggerUpload() {
    this.fileEle.nativeElement.click();
  }

  fileChange(event) {
    if (this.multiple) {
      this.files = this.files.concat(Array.prototype.slice.call(event.target.files));
      this.onChange(this.files);
    } else {
      this.files = [].concat(event.target.files[0]);
      this.onChange(this.files[0]);
    }

  }

  removeFile(index: number) {
    this._files.splice(index, 1);
  }

  dragFile(files: any) {
    this.files = this.files.concat(files);
  }

  onChange: (value: any) => void = () => null;
  onTouched: () => void = () => null;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value): void {
    if (isNotNil(value)) {
      this._files = [].concat(value);
    }
  }
}
