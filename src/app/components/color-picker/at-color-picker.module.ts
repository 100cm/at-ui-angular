import { OverlayModule }                 from '@angular/cdk/overlay';
import { CommonModule }                  from '@angular/common';
import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { AtAlphaComponent }              from './at-color-alpha/alpha.component';
import { AtColorAlphaPickerComponent }   from './at-color-alpha/at-color-alpha-picker.component';
import { AtColorEditableInputComponent } from './at-color-alpha/at-color-editable-input.component';
import { AtHueComponent }                from './at-color-alpha/at-hue.component';
import { AtSaturationComponent }         from './at-color-alpha/at-saturation.component';
import { AtSwatchComponent }             from './at-color-alpha/at-swatch.component';
import { AtCheckboardComponent }         from './at-color-alpha/checkboard.component';
import { AtCoordinatesDirective }        from './at-color-alpha/coordinates.directive';
import { AtColorSketchComponent }        from './at-color-sketch/at-color-sketch.component';
import { AtSketchFieldsComponent }       from './at-color-sketch/at-sketch-fields.component';
import { AtSketchPresetColorsComponent } from './at-color-sketch/at-sketch-preset-colors.component';
import { AtColorWrapComponent }          from './at-color-wrap/at-color-wrap.component';

@NgModule({
            imports: [CommonModule, FormsModule, OverlayModule],
            declarations: [AtColorWrapComponent, AtColorSketchComponent, AtSwatchComponent, AtColorEditableInputComponent,
              AtHueComponent,
              AtSaturationComponent, AtSketchFieldsComponent, AtSketchPresetColorsComponent,
              AtAlphaComponent, AtColorAlphaPickerComponent, AtCoordinatesDirective, AtCheckboardComponent],
            exports: [AtColorWrapComponent, AtColorSketchComponent, AtSwatchComponent, AtColorEditableInputComponent,
              AtSaturationComponent, AtSketchFieldsComponent, AtSketchPresetColorsComponent, AtHueComponent,
              AtAlphaComponent, AtColorAlphaPickerComponent, AtCoordinatesDirective, AtCheckboardComponent]
          })
export class AtColorPickerModule {
}
