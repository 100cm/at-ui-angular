import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDndComponent } from './at-demo-dnd.component';

describe('AtDemoDndComponent', () => {
  let component: AtDemoDndComponent;
  let fixture: ComponentFixture<AtDemoDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
