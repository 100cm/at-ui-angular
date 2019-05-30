<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="http://storage.360buyimg.com/mtd/home/logo-at1502718221686.svg">
  </a>
</p>

# AT UI

<div align="center">

An enterprise-class UI components based on Ant Design and Angular.

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.org/package/at-ng)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/ng-zorro/ng-zorro-antd.svg?style=flat-square)](https://gitter.im/ng-zorro/ng-zorro-antd)
[![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)

</div>
ng-at is a modular front-end UI framework for developing fast and powerful web interfaces based on Angular 7+.


#Last version

[7.0.2.rc2 ](http://ng-at.thunderjava.com/)


## Features

- Based on `Angular 7 +`
- A npm + webpack + babel front-end development workflow
- Support ES2015
- CSS Style independent, make consistent user interfaces (See: [AT-UI-Style](https://github.com/at-ui/at-ui-style))
- Friendly API

## Environment Support

- Modern browsers and Internet Explorer 9+
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## Links

- [Home Page](http://ng-at.thunderjava.com)
- [Angular](https://angular.io/)
- [Webpack](https://webpack.js.org/)
- [AT-UI for Vue](https://github.com/AT-UI/at-ui) (official library)

## Install

- Recommended use `npm`

```bash
npm install at-ng
```


## Usage

Because the style of `AT-UI` is independent. It's a separate project. So we should add `AT-UI-Style` to
cli config file

```js
++  "../node_modules/at-ng/assets/index.css",
```

Add the AtModule to your root module

```js
@NgModule({
  declarations: [
	...
  ],
  imports: [
  ++ AtModule.forRoot(),
  ]

```

## License

MIT


[npm-version-image]: https://img.shields.io/npm/v/at-ui.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/at-ng
[david-dm-image]: https://david-dm.org/AT-UI/at-ui.svg?style=flat-square
[david-dm-url]: https://david-dm.org/AT-UI/at-ui
[travis-image]: https://img.shields.io/travis/AT-UI/at-ui/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AT-UI/at-ui
