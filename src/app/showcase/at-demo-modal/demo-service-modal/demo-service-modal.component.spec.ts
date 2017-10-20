import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceModalComponent } from './demo-service-modal.component';

describe('DemoServiceModalComponent', () => {
  let component: DemoServiceModalComponent;
  let fixture: ComponentFixture<DemoServiceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoServiceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
