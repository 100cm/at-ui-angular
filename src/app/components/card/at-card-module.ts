import {NgModule}      from "@angular/core";
import {CommonModule}  from "@angular/common";
import {CardComponent} from "./card.component";
import {AtCardHeaderComponent} from './at-card-header/at-card-header.component';
import {AtCardContentComponent} from './at-card-content/at-card-content.component';
import {AtCardFooterComponent} from './at-card-footer/at-card-footer.component';

@NgModule({
            imports: [CommonModule,],
            declarations: [CardComponent,AtCardHeaderComponent,AtCardContentComponent,AtCardFooterComponent],
            exports: [CardComponent,AtCardHeaderComponent,AtCardContentComponent,AtCardFooterComponent]
          })
export class AtCardModule {
}
