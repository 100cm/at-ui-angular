import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogComponent } from './update-log.component';

describe('UpdateLogComponent', () => {
  let component: UpdateLogComponent;
  let fixture: ComponentFixture<UpdateLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
