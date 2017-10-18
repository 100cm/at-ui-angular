import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoMessageComponent } from './at-demo-message.component';

describe('AtDemoMessageComponent', () => {
  let component: AtDemoMessageComponent;
  let fixture: ComponentFixture<AtDemoMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
