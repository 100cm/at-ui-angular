import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoUploadComponent } from './at-demo-upload.component';

describe('AtDemoUploadComponent', () => {
  let component: AtDemoUploadComponent;
  let fixture: ComponentFixture<AtDemoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
