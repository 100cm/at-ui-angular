import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtPagenationModule } from './at-pagenation.module';

import { PagenationComponent } from './pagenation.component';

describe('PagenationComponent', () => {
  let component: PagenationTestComponent;
  let fixture: ComponentFixture<PagenationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenationTestComponent ],
      imports: [ AtPagenationModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenationTestComponent);
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
export class PagenationTestComponent {
  constructor() {}
}
