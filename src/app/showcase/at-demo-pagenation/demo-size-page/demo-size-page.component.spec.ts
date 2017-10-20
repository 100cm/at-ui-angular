import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizePageComponent } from './demo-size-page.component';

describe('DemoSizePageComponent', () => {
  let component: DemoSizePageComponent;
  let fixture: ComponentFixture<DemoSizePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
