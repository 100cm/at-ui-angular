import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSimplePageComponent } from './demo-simple-page.component';

describe('DemoSimplePageComponent', () => {
  let component: DemoSimplePageComponent;
  let fixture: ComponentFixture<DemoSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
