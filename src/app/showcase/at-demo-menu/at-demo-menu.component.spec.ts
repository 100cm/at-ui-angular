import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoMenuComponent } from './at-demo-menu.component';

describe('AtDemoMenuComponent', () => {
  let component: AtDemoMenuComponent;
  let fixture: ComponentFixture<AtDemoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
