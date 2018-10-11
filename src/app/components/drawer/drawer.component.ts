import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {CdkOverlayOrigin, Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal}                                       from '@angular/cdk/portal';
import {InputBoolean}                                         from "../utils/class-helper";

@Component({
             selector: 'at-drawer',
             template: `
               <ng-template #drawerTemplate>
                 <div
                   class="at-drawer"
                   [class.at-drawer-open]="isOpen"
                   [class.at-drawer-right]="atPlacement === 'right'"
                   [class.at-drawer-left]="atPlacement === 'left'">
                   <div  class="at-drawer-mask" (click)="maskClick($event)" *ngIf="atMask" [style.zIndex]="atZIndex" [ngStyle]="atMaskStyle"></div>
                   <div class="at-drawer-content-wrapper {{ atWrapClassName }}"
                        [style.zIndex]="atZIndex"
                        [style.transform]="transform">
                     <div class="at-drawer-content">
                       <div style="overflow: auto; height: 100%;" [style.width]="width">
                         <div *ngIf="atTitle" class="at-drawer-header">
                           <div class="at-drawer-title">
                             <ng-container [ngSwitch]="true">
                               <ng-container *ngSwitchCase="isTemplateRef(atTitle)" [ngTemplateOutlet]="atTitle"></ng-container>
                               <ng-container *ngSwitchCase="isNonEmptyString(atTitle)"><div [innerHTML]="atTitle"></div></ng-container>
                             </ng-container>
                           </div>
                         </div>
                         <button *ngIf="atClosable" (click)="close($event)" aria-label="Close" class="at-drawer-close"><span class="at-drawer-close-x"></span></button>
                         <div class="at-drawer-body" [ngStyle]="atBodyStyle">
                           <ng-content></ng-content>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </ng-template>
             `,
             preserveWhitespaces: false,
             changeDetection: ChangeDetectionStrategy.OnPush
           })
export class DrawerComponent implements OnInit {

  origin: CdkOverlayOrigin;
  overlayRef: OverlayRef;
  portal: TemplatePortal;
  isOpen = false;

  get transform(): string {
    if (this.atPlacement === 'left') {
      return this.isOpen ? `translateX(${this.atOffsetX}px)` : `translateX(-${this.width})`;
    }
    else {
      return this.isOpen ? `translateX(-${this.atOffsetX}px)` : `translateX(${this.width})`;
    }
  }

  get width(): string {
    return typeof this.atWidth === 'number' ? `${this.atWidth}px` : this.atWidth;
  }

  @ViewChild('drawerTemplate') drawerTemplate: TemplateRef<{}>;
  @Input() @InputBoolean() atClosable     = true;
  @Input() @InputBoolean() atMaskClosable = true;
  @Input() @InputBoolean() atMask         = true;
  @Input() atTitle: string | TemplateRef<{}>;
  @Input() atMaskStyle: object            = {};
  @Input() atBodyStyle: object            = {};
  @Input() atWrapClassName: string;
  @Input() atWidth: number | string       = 256;
  @Input() atPlacement: 'left' | 'right'  = 'right';
  @Input() atZIndex                       = 1000;
  @Input() atOffsetX                      = 0;
  @Output() atOnClose                     = new EventEmitter<MouseEvent>();

  @Input()
  set atVisible(value: boolean) {
    this.isOpen = value;
    this.updateOverlayStyle();
  }

  get atVisible(): boolean {
    return this.isOpen;
  }

  isNonEmptyString(value: {}): boolean {
    return typeof value === 'string' && value !== '';
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }

  constructor(
    private renderer: Renderer2,
    private overlay: Overlay,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit(): void {
    this.origin = new CdkOverlayOrigin(this.elementRef);
    this.attachOverlay();
    this.updateOverlayStyle();
  }

  ngOnDestroy(): void {
    this.disposeOverlay();
  }

  attachOverlay(): void {
    if (!this.overlayRef) {
      this.portal     = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }

    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
    }
  }

  disposeOverlay(): void {
    this.overlayRef.dispose();
    this.overlayRef = null;
  }

  getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
                               scrollStrategy: this.overlay.scrollStrategies.block()
                             });
  }

  updateOverlayStyle(): void {
    if (this.overlayRef && this.overlayRef.overlayElement) {
      this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
    }
  }

  close(e?: MouseEvent): void {
    this.atOnClose.emit(e);
  }

  maskClick(e: MouseEvent): void {
    if (this.atMaskClosable && this.atMask) {
      this.close(e);
    }
  }

}
