import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicMessageComponent } from './demo-basic-message.component';

describe('DemoBasicMessageComponent', () => {
  let component: DemoBasicMessageComponent;
  let fixture: ComponentFixture<DemoBasicMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
