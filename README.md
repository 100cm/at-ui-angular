<p align="center">
  <a style="text-align: center" href="https://at.aotu.io/">
    <img style="max-width:100%; display:inline-block" width=150 height=140 src="http://storage.360buyimg.com/mtd/home/logo-at1502718221686.svg">
    <span style="font-size: 30px;color: #aaa; margin: 0 20px; display: inline-block!important; vertical-align: middle;"> + </span>
    <img  style="max-width:100%; display:inline-block" height="150" src="https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg">
  </a>
</p>

# AT UI

<div align="center">

An enterprise-class UI components based on At UI Design and Angular.

[![npm package](https://img.shields.io/badge/version-8.0.2-green.svg)](https://www.npmjs.org/package/at-ng)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE)

</div>
at-ng is a modular front-end UI framework for developing fast and powerful web interfaces based on Angular 7+.


#Last version

[8.0.2 ](http://ng-at.thunderjava.com/)


## Features

- Based on `Angular 8 +`
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


