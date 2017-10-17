import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoColorTagComponent } from './demo-color-tag.component';

describe('DemoColorTagComponent', () => {
  let component: DemoColorTagComponent;
  let fixture: ComponentFixture<DemoColorTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoColorTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoColorTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
