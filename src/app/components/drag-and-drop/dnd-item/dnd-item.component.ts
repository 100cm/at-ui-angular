import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { fromEvent } from 'rxjs';
import { AtDndContent, DndContainerComponent } from '../dnd-container/dnd-container.component';
import { DragTriggerDirective } from '../drag-trigger.directive';

@Component({
  selector: 'at-dnd-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="drag_enter == true && show_drag_line == true">
      <div class="drag-over-place"></div>
    </ng-container>
    <div [class.dz-drag-start]="dragAndDropStart" class="none-drag-event">
      <ng-content></ng-content>
    </div>
    <div #drag_view
         style="position: fixed" [style.left.px]="-2000" [style.top.px]="-2000">
    </div>


  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DndItemComponent),
    multi: true
  }],
  host: {'[class.on-drag-enter]': 'drag_enter'},
  styles: [
      `:host {
      display: block;
      transition: all 0.3s;
    }

    .dz-drag-start {
      opacity: 0.7;
    }

    `
  ]
})
export class DndItemComponent implements OnInit {

  @Output() OnStopDrag: EventEmitter<any> = new EventEmitter();

  atIndex;

  constructor(private drag_container: DndContainerComponent,
              public elementRef: ElementRef,
              private render2: Renderer2,
              private ngZone: NgZone
  ) {
    this.atIndex = this.drag_container.drag_items.length;
    this.drag_container.drag_items.push(this);
  }

  @ContentChild(DragTriggerDirective, /* TODO: add static flag */ {static: false})
  set dragTrigger(value: DragTriggerDirective) {
    if (value) {
      this._triggerElement = value.el.nativeElement;
      this.loadALL();
    }
  }

  _triggerElement;

  @Input() moveElement: HTMLElement;

  @ViewChild('drag_view', {static: true}) dragView: ElementRef;

  private _dragElement: ElementRef;

  get dragElement(): ElementRef {
    return this._dragElement;
  }

  init = false;

  initIndex = false;

  drag_init = false;

  drag_enter = false;

  @Input()
  show_drag_line = true;

  downeventOffset = {x: 0, y: 0};

  dragAndDropStart = false;

  content: AtDndContent;

  writeValue(obj: any): void {
    if (obj) {
      this.content = obj;
      if (!this.initIndex) {
        this.content.atIndex = this.atIndex;
        this.initIndex = true;
      }
    }
  }

  position = {x: 0, y: 0};
  onChange: any = Function.prototype;
  onTouched: any = Function.prototype;

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  @Output() onDragOver = new EventEmitter<any>();

  @Output() onDrop = new EventEmitter();

  @Output() onDragging = new EventEmitter<any>();

  loadALL() {
    if (!this.init) {
      this.loadDragList();
    }
  }

  child;
  start_switch = false;

  ngOnInit(): void {

  }

  loadDragList() {
    if (this._triggerElement) {
      this.init = true;
      const $drop = fromEvent(this.elementRef.nativeElement, 'drop');
      const dragEnd = fromEvent(this._triggerElement, 'dragend');
      const dragStart = fromEvent(this._triggerElement, 'dragstart');
      const dragEnter = fromEvent(this.elementRef.nativeElement, 'dragenter');
      dragStart.pipe().subscribe((event: DragEvent) => {
        this.dragAndDropStart = true;
        this.drag_container.dragging_item = this;
        this.child = this.moveElement.cloneNode(true);
        const width = this.moveElement.offsetWidth;
        const height = this.moveElement.offsetHeight;
        this.render2.setStyle(this.child, 'width', width + 'px');
        this.render2.setStyle(this.child, 'height', height + 'px');
        this.render2.setStyle(this.child, 'border', '1px dashed #D2D2D2');
        this.render2.setStyle(this.child, 'padding', '4px');
        this.render2.appendChild(this.dragView.nativeElement, this.child);
        event.dataTransfer.setDragImage(this.child, 0, 0);
        event.dataTransfer.setData('target', 'trigger');
      });

      dragEnd.subscribe(event => {
        this.render2.removeChild(this.dragView.nativeElement, this.child);
        this.dragEndHook();
      });

      this.ngZone.runOutsideAngular(() => {
        this.render2.listen(this.elementRef.nativeElement, 'dragover', (event) => {
          event.preventDefault();
        });

        // this.render2.listen(this.elementRef.nativeElement, 'transitionend', (event) => {
        //   console.log(this.start_switch)
        //   this.start_switch = false
        // })

        this.render2.listen(this.elementRef.nativeElement, 'dragleave', (event) => {
          event.preventDefault();
          // Get the location on screen of the element.
          const rect = this.elementRef.nativeElement.getBoundingClientRect();
          // Check the mouseEvent coordinates are outside of the rectangle
          const e = event;
          if (e.x >= (rect.left + rect.width) || e.x <= rect.left || e.y >= (rect.top + rect.height) || e.y <= rect.top) {
            console.log('leave', this.content.key);
            this.drag_enter = false;
            // if (this.drag_container.dragging_enter_item == this) {
            //   this.drag_container.dragging_enter_item = null
            // }
          }
          this.drag_enter = false;
        });

      });
      dragEnter.subscribe((event: DragEvent) => {
        event.preventDefault();
        if (this.drag_container.dragging_item != this) {
          this.drag_enter = true;
        }
      });
      $drop.subscribe((event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.content.key);
        this.dragEndHook();
        if (event.dataTransfer.getData('target') != 'trigger') {
          return false;
        } else {
          // return false if on self
          if (this.content.key == this.drag_container.dragging_item.content.key) {
            return false;
          } else {
            this.drag_container.insertChildElement(this.content);

          }
        }

      });
    }
  }

  sortble() {
    if (this.drag_container.dragging_item.rect) {
      const base_el = this.drag_container.dragging_item.rect;
      const base_cache = this.drag_container.dragging_item.cache_rect;
      const target = this.rect;
      const target_cache = this.cache_rect;
      let target_position = {x: base_el.x - target_cache.x, y: base_el.y - target_cache.y};
      const base_position = {x: base_cache.x - target.x, y: base_cache.y - target.y};
      // console.log('drag enter', this.content.key)
      this.drag_container.dragging_enter_item = this;
      if (base_el.x == this.cache_rect.x && base_el.y == this.cache_rect.y) {
        target_position = {x: 0, y: 0};
      }
      // Swicth index
      this.rect = {x: base_el.x, y: base_el.y};
      this.drag_container.dragging_item.rect = {x: target.x, y: target.y};

      const tmpIndex = this.content.atIndex;

      const baseIndex = this.drag_container.dragging_item.content.atIndex;

      this.content.atIndex = baseIndex;

      this.drag_container.dragging_item.content.atIndex = tmpIndex;

      //
      // this.render2.setStyle(this.drag_container.dragging_item.elementRef.nativeElement, 'transform',
      //                       `translate3d(${0 - base_position.x}px ,
      //                     ${0 - base_position.y}px,0px)`)
      // this.render2.setStyle(this.elementRef.nativeElement, 'transform',
      //                       `translate3d(${target_position.x}px ,${target_position.y}px,0px)`)

    }

  }

  dragEndHook() {
    this.drag_enter = false;
    this.dragAndDropStart = false;
    this.drag_container.dragging_enter_item = null;
  }

  pauseEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }

  rect: any = {};
  cache_rect: any = {};

  ngAfterViewInit() {
    this.rect = this.elementRef.nativeElement.getBoundingClientRect();
    this.cache_rect = this.elementRef.nativeElement.getBoundingClientRect();

  }

}
