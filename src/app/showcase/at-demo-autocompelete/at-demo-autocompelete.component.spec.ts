import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoAutocompeleteComponent } from './at-demo-autocompelete.component';

describe('AtDemoAutocompeleteComponent', () => {
  let component: AtDemoAutocompeleteComponent;
  let fixture: ComponentFixture<AtDemoAutocompeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoAutocompeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoAutocompeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
