import {NgModule}                       from '@angular/core';
import {CommonModule}                   from '@angular/common';
import {AtEditorComponent}              from './at-editor/at-editor.component';
import {AtDropdownModule}               from '../dropdown/at-dropdown.module';
import {OverlayModule}                  from '@angular/cdk/overlay';
import {AtEditorMenuBoldComponent}      from './menus/at-editor-menu-bold/at-editor-menu-bold.component';
import {AtIconModule}                   from '../icon/at-icon.module';
import {AtButtonModule}                 from '../button/at-button-module';
import {AtEditorMenuItalicComponent}    from './menus/at-editor-menu-italic/at-editor-menu-italic.component';
import {AtEditorMenuUnderlineComponent} from './menus/at-editor-menu-underline/at-editor-menu-underline.component';
import {AtEditorMenuFontSizeComponent}  from './menus/at-editor-menu-font-size/at-editor-menu-font-size.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    AtIconModule,
    AtButtonModule,
    AtDropdownModule,
  ],
  declarations: [AtEditorComponent, AtEditorMenuBoldComponent,
    AtEditorMenuItalicComponent, AtEditorMenuUnderlineComponent, AtEditorMenuFontSizeComponent],
  exports: [AtEditorComponent]
})
export class AtEditorModule {
}
