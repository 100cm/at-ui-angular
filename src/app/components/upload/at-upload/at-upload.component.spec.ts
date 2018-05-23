import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtUploadComponent } from './at-upload.component';

describe('AtUploadComponent', () => {
  let component: AtUploadComponent;
  let fixture: ComponentFixture<AtUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
