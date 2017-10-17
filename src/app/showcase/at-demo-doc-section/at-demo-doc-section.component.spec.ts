import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDocSectionComponent } from './at-demo-doc-section.component';

describe('AtDemoDocSectionComponent', () => {
  let component: AtDemoDocSectionComponent;
  let fixture: ComponentFixture<AtDemoDocSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDocSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDocSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
