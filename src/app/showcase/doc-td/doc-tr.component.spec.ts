import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTdComponent } from './doc-td.component';

describe('DocTdComponent', () => {
  let component: DocTdComponent;
  let fixture: ComponentFixture<DocTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
