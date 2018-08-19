import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-demo-form-basic',
  templateUrl: './demo-form-basic.component.html',
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
