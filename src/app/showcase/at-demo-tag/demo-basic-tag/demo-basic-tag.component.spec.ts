import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicTagComponent } from './demo-basic-tag.component';

describe('DemoBasicTagComponent', () => {
  let component: DemoBasicTagComponent;
  let fixture: ComponentFixture<DemoBasicTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
