import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuListComponent } from './drop-menu-list.component';

describe('DropMenuListComponent', () => {
  let component: DropMenuListComponent;
  let fixture: ComponentFixture<DropMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
