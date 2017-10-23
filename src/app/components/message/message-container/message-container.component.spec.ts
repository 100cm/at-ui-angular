import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainerComponent } from './message-container.component';

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  let fixture: ComponentFixture<MessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
