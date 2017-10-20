import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFullPageComponent } from './demo-full-page.component';

describe('DemoFullPageComponent', () => {
  let component: DemoFullPageComponent;
  let fixture: ComponentFixture<DemoFullPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFullPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
