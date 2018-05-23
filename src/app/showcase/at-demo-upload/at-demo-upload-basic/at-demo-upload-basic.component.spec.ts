import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoUploadBasicComponent } from './at-demo-upload-basic.component';

describe('AtDemoUploadBasicComponent', () => {
  let component: AtDemoUploadBasicComponent;
  let fixture: ComponentFixture<AtDemoUploadBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoUploadBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoUploadBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
