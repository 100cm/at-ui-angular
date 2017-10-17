import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallComponent } from './install.component';

describe('InstallComponent', () => {
  let component: InstallComponent;
  let fixture: ComponentFixture<InstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
