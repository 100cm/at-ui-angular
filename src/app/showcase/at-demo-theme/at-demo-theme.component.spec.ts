import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoThemeComponent } from './at-demo-theme.component';

describe('AtDemoThemeComponent', () => {
  let component: AtDemoThemeComponent;
  let fixture: ComponentFixture<AtDemoThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
