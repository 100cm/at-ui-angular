import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTypeTdComponent } from './doc-type-td.component';

describe('DocTypeTdComponent', () => {
  let component: DocTypeTdComponent;
  let fixture: ComponentFixture<DocTypeTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTypeTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTypeTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
