import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const format = process.env.ROLLUP_FORMAT || 'es'

let globals = {
  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/common/http': 'ng.common.http',
  '@angular/router': 'ng.router',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/core/testing': 'ng.core.testing',
  '@angular/common/testing': 'ng.common.testing',
  '@angular/common/http/testing': 'ng.common.http.testing',

  '@angular/cdk': 'ng.cdk',
  '@angular/cdk/keycodes': 'ng.cdk.keycodes',
  '@angular/cdk/a11y': 'ng.cdk.a11y',
  '@angular/cdk/accordion': 'ng.cdk.accordion',
  '@angular/cdk/bidi': 'ng.cdk.bidi',
  '@angular/cdk/coercion': 'ng.cdk.coercion',
  '@angular/cdk/collections': 'ng.cdk.collections',
  '@angular/cdk/layout': 'ng.cdk.layout',
  '@angular/cdk/observers': 'ng.cdk.observers',
  '@angular/cdk/overlay': 'ng.cdk.overlay',
  '@angular/cdk/platform': 'ng.cdk.platform',
  '@angular/cdk/portal': 'ng.cdk.portal',
  '@angular/cdk/scrolling': 'ng.cdk.scrolling',
  '@angular/cdk/stepper': 'ng.cdk.stepper',
  '@angular/cdk/table': 'ng.cdk.table',

  'moment': 'moment',
  'moment/locale/zh-cn': null,

  'rxjs'          : 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',
}

if (format === 'es') {
  globals = Object.assign(globals, {
    'tslib': 'tslib',
  })
}

let input
let file

switch (format) {
  case 'es':
    input = './publish/src/index.js'
    file = './publish/esm15/index.js'
    break
  case 'umd':
    input = './publish/esm5/index.js'
    file = './publish/bundles/at-ng.umd.js'
    break
  default:
    throw new Error(`format ${format} is not supported`)
}

export default {
  input,
  output: {
    file,
    format,
  },
  exports: 'named',
  name: 'at-ng',
  plugins: [replace({ "import * as moment": "import moment" }), resolve()],
  external: Object.keys(globals),
  globals,
}
