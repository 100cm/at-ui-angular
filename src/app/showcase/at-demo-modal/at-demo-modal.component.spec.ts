import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoModalComponent } from './at-demo-modal.component';

describe('AtDemoModalComponent', () => {
  let component: AtDemoModalComponent;
  let fixture: ComponentFixture<AtDemoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
