import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLayoutSidebarComponent } from './at-layout-sidebar.component';

describe('AtLayoutSidebarComponent', () => {
  let component: AtLayoutSidebarComponent;
  let fixture: ComponentFixture<AtLayoutSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtLayoutSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
