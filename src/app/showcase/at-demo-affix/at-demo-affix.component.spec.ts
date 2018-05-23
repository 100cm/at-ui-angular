import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoAffixComponent } from './at-demo-affix.component';

describe('AtDemoAffixComponent', () => {
  let component: AtDemoAffixComponent;
  let fixture: ComponentFixture<AtDemoAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
