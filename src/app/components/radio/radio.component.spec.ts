import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AtRadioModule } from './at-radio-module';
import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioBasicTestComponent;
  let fixture: ComponentFixture<RadioBasicTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBasicTestComponent ],
      imports: [ FormsModule, AtRadioModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBasicTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: ``
})
export class RadioBasicTestComponent {

}
