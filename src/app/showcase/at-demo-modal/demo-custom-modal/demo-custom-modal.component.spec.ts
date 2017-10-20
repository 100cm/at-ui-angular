import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCustomModalComponent } from './demo-custom-modal.component';

describe('DemoCustomModalComponent', () => {
  let component: DemoCustomModalComponent;
  let fixture: ComponentFixture<DemoCustomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCustomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
