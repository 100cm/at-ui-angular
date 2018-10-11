import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndContainerComponent } from './dnd-container.component';

describe('DndContainerComponent', () => {
  let component: DndContainerComponent;
  let fixture: ComponentFixture<DndContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
