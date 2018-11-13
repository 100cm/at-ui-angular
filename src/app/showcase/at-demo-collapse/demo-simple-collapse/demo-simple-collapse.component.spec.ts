import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSimpleCollapseComponent } from './demo-simple-collapse.component';

describe('DemoSimpleCollapseComponent', () => {
  let component: DemoSimpleCollapseComponent;
  let fixture: ComponentFixture<DemoSimpleCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSimpleCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSimpleCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
