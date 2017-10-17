import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoPagenationComponent } from './at-demo-pagenation.component';

describe('AtDemoPagenationComponent', () => {
  let component: AtDemoPagenationComponent;
  let fixture: ComponentFixture<AtDemoPagenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoPagenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoPagenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
