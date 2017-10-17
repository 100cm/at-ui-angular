import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoSelectComponent } from './at-demo-select.component';

describe('AtDemoSelectComponent', () => {
  let component: AtDemoSelectComponent;
  let fixture: ComponentFixture<AtDemoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
