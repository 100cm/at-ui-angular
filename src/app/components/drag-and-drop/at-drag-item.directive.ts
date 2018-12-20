import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {DndContainerComponent}                    from "./dnd-container/dnd-container.component";
import {AtDragService}                            from "./at-drag.service";

@Directive({
             selector: '[at-drag-item]'
           })
export class AtDragItemDirective implements OnInit {
  el
  tapEvt
  fallbackOffset = {x: 0, y: 0}
  ghostEL
  ngOnInit(): void {
    this.render2.listen(this.ref.nativeElement, 'mousedown', (evt) => {
      let type    = evt.type,
          touch   = evt.touches && evt.touches[0],
          target  = (touch || evt).target
      this.tapEvt = evt

      let originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0]) || target

      if (this.drag_service.draggingItem) {
        return;
      }

      this.drag_service.draggingItem = this.el
      // cancel dnd if original target is content editable
      if (originalTarget.isContentEditable) {
        return;
      }
      this.render2.setStyle(this.el, 'will-change', 'all')
      this.ref.nativeElement.draggable = true
      let cloneEl                      = this.el.cloneNode(true)
      cloneEl.draggable                = false;
      cloneEl.style['will-change']     = '';
      this.render2.setStyle(cloneEl, 'display', 'none');
      console.log(this.drag_service.rootEl)
      this.drag_service.rootEl.insertBefore(cloneEl, this.el)
    })

    this.render2.listen(this.el, 'mousemove', (evt) => {
      if (this.tapEvt) {
        let touch       = evt.touches ? evt.touches[0] : evt,
            dx          = (touch.clientX - this.tapEvt.clientX) + this.fallbackOffset.x,
            dy          = (touch.clientY - this.tapEvt.clientY) + this.fallbackOffset.y,
            translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';
        this._appendGhost(translate3d)
      }

    })

    this.render2.listen(this.el, 'mouseup', (evt) => {
      this.drag_service.draggingItem = null
    })
  }

  constructor(private ref: ElementRef,
              private render2: Renderer2,
              private drag_service: AtDragService) {
    this.el = ref.nativeElement
  }

  _appendGhost(translate3d) {

    if (!this.ghostEL) {
      let rect    = this.drag_service.draggingItem.getBoundingClientRect(),
          ghostRect;
      this.ghostEL = this.drag_service.draggingItem.cloneNode(true);

      this.render2.setStyle(this.ghostEL, 'top', rect.top);
      this.render2.setStyle(this.ghostEL, 'left', rect.left);
      this.render2.setStyle(this.ghostEL, 'width', rect.width);
      this.render2.setStyle(this.ghostEL, 'height', rect.height);
      this.render2.setStyle(this.ghostEL, 'opacity', '0.8');
      this.render2.setStyle(this.ghostEL, 'position', 'fixed');
      this.render2.setStyle(this.ghostEL, 'zIndex', '100000');
      this.render2.setStyle(this.ghostEL, 'pointerEvents', 'none');

      document.body.appendChild(this.ghostEL)

      // Fixing dimensions.
      ghostRect = this.ghostEL.getBoundingClientRect();
      this.render2.setStyle(this.ghostEL, 'width', rect.width * 2 - ghostRect.width);
      this.render2.setStyle(this.ghostEL, 'height', rect.height * 2 - ghostRect.height);

      this.render2.setStyle(this.ghostEL, 'webkitTransform', translate3d);
      this.render2.setStyle(this.ghostEL, 'mozTransform', translate3d);
      this.render2.setStyle(this.ghostEL, 'msTransform', translate3d);
      this.render2.setStyle(this.ghostEL, 'transform', translate3d);
    }
  }


  ngAfterViewInit() {

  }

}
