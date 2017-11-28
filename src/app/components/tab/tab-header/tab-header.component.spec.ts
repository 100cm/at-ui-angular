import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeaderComponent } from './tab-header.component';

describe('TabHeaderComponent', () => {
  let component: TabHeaderComponent;
  let fixture: ComponentFixture<TabHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
