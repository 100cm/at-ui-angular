import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCardHeaderComponent } from './at-card-header.component';

describe('AtCardHeaderComponent', () => {
  let component: AtCardHeaderComponent;
  let fixture: ComponentFixture<AtCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
