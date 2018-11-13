import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCardContentComponent } from './at-card-content.component';

describe('AtCardContentComponent', () => {
  let component: AtCardContentComponent;
  let fixture: ComponentFixture<AtCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
