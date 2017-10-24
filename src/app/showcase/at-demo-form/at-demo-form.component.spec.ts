import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoFormComponent } from './at-demo-form.component';

describe('AtDemoFormComponent', () => {
  let component: AtDemoFormComponent;
  let fixture: ComponentFixture<AtDemoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
