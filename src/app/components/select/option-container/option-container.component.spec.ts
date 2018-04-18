import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionContainerComponent } from './option-container.component';

describe('OptionContainerComponent', () => {
  let component: OptionContainerComponent;
  let fixture: ComponentFixture<OptionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
