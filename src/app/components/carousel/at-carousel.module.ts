import {OverlayModule}       from '@angular/cdk/overlay';
import {CommonModule}        from '@angular/common';
import {NgModule}            from '@angular/core';
import {FormsModule}         from '@angular/forms';
import {AtCarouselComponent} from './at-carousel/at-carousel.component';
import {AtCarouselDirective} from './at-carousel/at-carousel.directive';


@NgModule({
            imports: [CommonModule, FormsModule, OverlayModule],
            declarations: [AtCarouselDirective, AtCarouselComponent],
            exports: [AtCarouselDirective, AtCarouselComponent]
          })
export class AtCarouselModule {
}
