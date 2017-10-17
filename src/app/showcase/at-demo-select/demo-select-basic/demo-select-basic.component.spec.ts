import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSelectBasicComponent } from './demo-select-basic.component';

describe('DemoSelectBasicComponent', () => {
  let component: DemoSelectBasicComponent;
  let fixture: ComponentFixture<DemoSelectBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSelectBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
