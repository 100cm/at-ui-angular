import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndMoveItemComponent } from './dnd-move-item.component';

describe('DndMoveItemComponent', () => {
  let component: DndMoveItemComponent;
  let fixture: ComponentFixture<DndMoveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndMoveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndMoveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
