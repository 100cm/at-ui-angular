import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAffixBasicComponent } from './demo-affix-basic.component';

describe('DemoAffixBasicComponent', () => {
  let component: DemoAffixBasicComponent;
  let fixture: ComponentFixture<DemoAffixBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAffixBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAffixBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
