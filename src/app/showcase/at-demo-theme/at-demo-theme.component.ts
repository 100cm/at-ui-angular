import { Component, OnInit } from '@angular/core';
import { getHue, getSaturation, getValue } from '../../utils/color';
import tinycolor from 'tinycolor2';

@Component({
  selector: 'app-at-demo-theme',
  templateUrl: './at-demo-theme.component.html',
  styleUrls: ['./at-demo-theme.component.scss']
})
export class AtDemoThemeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const pColor = tinycolor('#1890ff');
    console.log(pColor);
    console.log(pColor.toHsv())
    console.log(getHue(pColor.toHsv(), 1, false));
    console.log(getSaturation(pColor.toHsv(), 1, false));
    console.log(getValue(pColor.toHsv(), 1, false));
    const c = tinycolor({
      h: getHue(pColor.toHsv(), 1, false),
      s: getSaturation(pColor.toHsv(), 1, false),
      v: getValue(pColor.toHsv(), 1, false)
    });
    console.log(c.toHsl());
    console.log(c.toHexString());
  }

}
