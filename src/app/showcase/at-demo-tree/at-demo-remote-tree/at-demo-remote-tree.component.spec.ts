import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoRemoteTreeComponent } from './at-demo-remote-tree.component';

describe('AtDemoRemoteTreeComponent', () => {
  let component: AtDemoRemoteTreeComponent;
  let fixture: ComponentFixture<AtDemoRemoteTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoRemoteTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoRemoteTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
