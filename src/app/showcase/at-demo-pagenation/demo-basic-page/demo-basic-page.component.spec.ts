import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicPageComponent } from './demo-basic-page.component';

describe('DemoBasicPageComponent', () => {
  let component: DemoBasicPageComponent;
  let fixture: ComponentFixture<DemoBasicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
