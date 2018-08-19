import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[atFormFeedback]'
})
export class AtFormFeedbackDirective {

  constructor() {
  }

  @Input() status: any

  @HostBinding('class.feedback') feedback = true


  @HostBinding('class.feedback_success')
  get success() {
    return this.isSuccess
  }

  @HostBinding('class.feedback_warning')
  get warning() {
    return this.isWarning
  }

  @HostBinding('class.feedback_error')
  get error() {
    return this.isError
  }

  get isWarning(): boolean {
    return this._isDirtyAndError('warning');
  };

  get isValidate(): boolean {
    return this._isDirtyAndError('validating') || this.status === 'pending' || this.status && this.status.dirty && this.status.pending;
  };

  get isError(): boolean {
    return this._isDirtyAndError('error')
      || this._isDirtyAndError('required')
      || this._isDirtyAndError('pattern')
      || this._isDirtyAndError('email')
      || this._isDirtyAndError('maxlength')
      || this._isDirtyAndError('minlength')
  };

  get isSuccess(): boolean {
    return this.status === 'success' || this.status && this.status.dirty && this.status.valid;
  };


  _isDirtyAndError(name) {
    return this.status === name || this.status && this.status.dirty && this.status.hasError && this.status.hasError(name)
  }


}
