import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtAffixComponent } from './at-affix.component';

describe('AtAffixComponent', () => {
  let component: AtAffixComponent;
  let fixture: ComponentFixture<AtAffixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtAffixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtAffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
