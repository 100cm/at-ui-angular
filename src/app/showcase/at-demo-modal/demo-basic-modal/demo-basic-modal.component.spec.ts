import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicModalComponent } from './demo-basic-modal.component';

describe('DemoBasicModalComponent', () => {
  let component: DemoBasicModalComponent;
  let fixture: ComponentFixture<DemoBasicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
