import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavsComponent } from './tab-navs.component';

describe('TabNavsComponent', () => {
  let component: TabNavsComponent;
  let fixture: ComponentFixture<TabNavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
