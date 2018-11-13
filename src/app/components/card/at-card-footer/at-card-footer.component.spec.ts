import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCardFooterComponent } from './at-card-footer.component';

describe('AtCardFooterComponent', () => {
  let component: AtCardFooterComponent;
  let fixture: ComponentFixture<AtCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
