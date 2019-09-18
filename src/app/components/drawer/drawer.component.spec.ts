import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtDrawerModule } from './at-drawer.module';

import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerTestComponent;
  let fixture: ComponentFixture<DrawerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerTestComponent ],
      imports: [ AtDrawerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: ``
})
export class DrawerTestComponent {
  constructor() {}
}
