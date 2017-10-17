import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTagComponent } from './at-demo-tag.component';

describe('AtDemoTagComponent', () => {
  let component: AtDemoTagComponent;
  let fixture: ComponentFixture<AtDemoTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
