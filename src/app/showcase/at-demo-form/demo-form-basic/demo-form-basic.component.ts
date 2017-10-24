import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-basic',
  template: `
    <form nz-form [formGroup]="validateForm">
      <div class="at-form-item" atRow>
        <label [required]="true" atFormLabel atCol [span]="4">
          Username
        </label>
        <div class="at-form-item__content" atCol [span]="20" atFormFeedback [status]="getValidate('username')">
          <atInput formControlName="username"></atInput>
          <div *ngIf="!getValidate('password').valid && getValidate('password').dirty" atFormError>错误提示信息</div>
        </div>
      </div>

      <div atFormItem atRow>
        <label atFormLabel [required]="true" atCol [span]="4">
          password
        </label>
        <div atFormContent atCol atFormFeedback [span]="20" [status]="getValidate('password')">
          <atInput [type]="'password'" formControlName="password"></atInput>
          <div *ngIf="!getValidate('password').valid && getValidate('password').dirty" atFormError>错误提示信息</div>
        </div>
      </div>

      <div atFormItem atRow>
        <label class="at-form-item__label" atCol [span]="4">
          success
        </label>
        <div class="at-form-item__content" atFormFeedback [status]="'success'" atCol [span]="20">
          <atInput></atInput>
        </div>
      </div>

      <div atFormItem atRow>
        <label class="at-form-item__label" atCol [span]="4">
          error
        </label>
        <div class="at-form-item__content" atFormFeedback [status]="'error'" atCol [span]="20">
          <atInput></atInput>
        </div>
      </div>


    </form>
  `,
  styleUrls: ['./demo-form-basic.component.css']
})
export class DemoFormBasicComponent implements OnInit {

  validateForm

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  getValidate(name) {
    return this.validateForm.controls[name];
  }

  ngOnInit() {
  }

}
