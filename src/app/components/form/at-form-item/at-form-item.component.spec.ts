import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormItemComponent } from './at-form-item.component';

describe('AtFormItemComponent', () => {
  let component: AtFormItemComponent;
  let fixture: ComponentFixture<AtFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
