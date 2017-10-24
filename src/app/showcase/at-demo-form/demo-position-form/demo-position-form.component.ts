import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-position-form',
  template: `
    <atRadioGroup [(ngModel)]="position" [size]="'small'">
      <label atRadioButton [atValue]="'vertical'">
        vertical
      </label>
      <label atRadioButton [atValue]="'horizontal'">
        horizontal
      </label>
      <label atRadioButton [atValue]="'inline'">
        inline
      </label>
    </atRadioGroup>

    <hr>

    <form *ngIf="position == 'horizontal'" atForm [type]="position">
      <div class="at-form-item" atRow>
        <label [required]="true" atFormLabel atCol [span]="4">
          Username
        </label>
        <div class="at-form-item__content" atCol [span]="20" atFormFeedback>
          <atInput></atInput>
        </div>
      </div>

      <div atFormItem atRow>
        <label atFormLabel [required]="true" atCol [span]="4">
          password
        </label>
        <div atFormContent atCol atFormFeedback [span]="20">
          <atInput [type]="'password'"></atInput>
        </div>
      </div>

      <div atFormItem atRow>
        <label atFormLabel atCol [span]="4">
          success
        </label>
        <div class="at-form-item__content" atFormFeedback [status]="'success'" atCol [span]="20">
          <atInput></atInput>
        </div>
      </div>

      <div atFormItem atRow>
        <label atFormLabel atCol [span]="4">
          error
        </label>
        <div atFormContent atFormFeedback [status]="'error'" atCol [span]="20">
          <atInput></atInput>
        </div>
      </div>

    </form>

    <form *ngIf="position != 'horizontal'" atForm [type]="position">
      <div class="at-form-item">
        <label [required]="true" atFormLabel>
          Username
        </label>
        <div class="at-form-item__content" atFormFeedback>
          <atInput></atInput>
        </div>
      </div>

      <div atFormItem>
        <label atFormLabel [required]="true">
          password
        </label>
        <div atFormContent atFormFeedback>
          <atInput [type]="'password'"></atInput>
        </div>
      </div>

      <div atFormItem>
        <label atFormLabel [required]="true">
          password
        </label>
        <div atFormContent atFormFeedback>
          <atInput [type]="'password'"></atInput>
        </div>
      </div>

      <div atFormItem>
        <label atFormLabel [required]="true">
          password
        </label>
        <div atFormContent atFormFeedback>
          <atInput [type]="'password'"></atInput>
        </div>
      </div>

    </form>
  `,
  styleUrls: ['./demo-position-form.component.css']
})
export class DemoPositionFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  position = 'horizontal'

}
