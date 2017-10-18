import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoLoadingbarComponent } from './at-demo-loadingbar.component';

describe('AtDemoLoadingbarComponent', () => {
  let component: AtDemoLoadingbarComponent;
  let fixture: ComponentFixture<AtDemoLoadingbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoLoadingbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoLoadingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
