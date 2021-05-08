此项目已经停止维护。仅供学习参考。


<p align="center">
  <a style="text-align: center" href="https://at.aotu.io/">
  <img style="max-width:100%; display: inline-block!important; vertical-align: middle;" width=150 height=140 src="http://storage.360buyimg.com/mtd/home/logo-at1502718221686.svg">
  </a>
</p>

<h1 align="center">
AT-NG
</h1>

<div align="center">

An enterprise-class UI components based on At UI Design and Angular. 🚀🚀🚀

[![npm package](https://img.shields.io/badge/version-8.0.2-green.svg)](https://www.npmjs.org/package/at-ng)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE)

</div>
at-ng is a modular front-end UI framework for developing fast and powerful web interfaces based on Angular 7+.


## Latest version

[8.0.2 ](http://ng-at.thunderjava.com/)


## ✨Features

- Based on `Angular 8 +`
- A npm + webpack + babel front-end development workflow
- Support ES2015
- CSS Style independent, make consistent user interfaces (See: [AT-UI-Style](https://github.com/at-ui/at-ui-style))
- Friendly API

## 🖥 Environment Support

- Modern browsers and Internet Explorer 9+
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions

> NOTICE: At-ng dependent on @angular/cdk 

## 🔗Links

- [Home Page](http://ng-at.thunderjava.com)
- [Angular](https://angular.io/)
- [Webpack](https://webpack.js.org/)
- [AT-UI for Vue](https://github.com/AT-UI/at-ui) (official library)

## 📦Install

- Recommended use `npm`

```bash
npm install at-ng
```


## 🔨Usage

Because of the style of `AT-UI` is independent. It's a separate project. So we should add `AT-UI-Style` to
cli config file

```
++  "../node_modules/at-ng/assets/index.css",
```

We could also have theme system now. 🎨 

Create a standalone less file named theme.less in src folder, and add the path of it to the list of styles in angular.json file.

```

...
  "styles": [
    ...
    "src/theme.scss"
    ...
  ]
...

```

Copy the scss variable file from `~node_modules/at-ng/styles/sass/variables/default` to `theme.scss`

Here is an example of theme.scss

```

@import "~node_modules/at-ng/styles/sass/mixins/index";
$css-prefix: at;

/* change the brand color */
$brand-color: #c41d7f;
....

/*  config the icon font path  */
$font-path: '~node_modules/at-ng/styles/sass/fonts';

/*  import the entry file that conatins all scss files  */
@import "~node_modules/at-ng/styles/sass/entry";

```

Add the AtModule to your root module

```js
@NgModule({
  imports: [
   AtModule.forRoot(),
  ]
  })
```


## 💉Other dependencies




## License

MIT


