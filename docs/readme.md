<p align="center">
  <a href="https://github.com/SlimDogs/sass-ultimate-boilerplate"><img src="https://github.com/SlimDogs/sass-ultimate-boilerplate/blob/master/docs/assets/logo.png?raw=true" alt="Sass ultimate boilerplate" height="200px"></a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sass-ultimate-boilerplate"><img src="https://badge.fury.io/js/sass-ultimate-boilerplate.svg" alt="npm version"></a>
  <a href="#" target="_blank"><img src="https://travis-ci.org/SlimDogs/sass-ultimate-boilerplate.svg?branch=master" alt="Latest CI build status" title="Latest CI build status"></a>
  <a href="https://github.com/SlimDogs/sass-ultimate-boilerplate" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic release" title="Semantic release"></a>
  <a href="https://greenkeeper.io" target="_blank"><img src="https://badges.greenkeeper.io/SlimDogs/sass-ultimate-boilerplate.svg" alt="Greenkeeper" title="Greenkeeper"></a>
  <a href="http://commitizen.github.io/cz-cli" target="_blank"><img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly" title="Commitizen friendly"></a>
  <a href="https://www.npmjs.com/package/sass-ultimate-boilerplate" target="_blank"><img src="https://img.shields.io/npm/dw/sass-ultimate-boilerplate.svg" alt="NPM Downloads" title="NPM Downloads"></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" title="MIT License"></a>
</p>

## Table of content
- [About](#about)
- [Installation](#installation)
- [How to use?](#how-to-use)
- [License](#license)
- [Features](#features)

## About
Sass boilerplate which is useful when starting a new web project. Includes: variables, functions, mixins, animations and other useful bits!

## installation
* If you are using yarn run `yarn add sass-ultimate-boilerplate --save`
* If you prefer npm run `npm install sass-ultimate-boilerplate --save`

## How to use
* In one of your sass files (preferably top of the root sass file) import sass-ultimate-boilerplate with a fallowing code:
```scss
@import "~sass-ultimate-boilerplate/src/sass-boilerplate";
```

If you are developing encapsulating components (for example Angular components) you can also import `animations`, `functions` and `mixins` separately like so:
1. Import animations only:
```scss
@import "~sass-ultimate-boilerplate/src/animations";
```
2. Import functions only:
```scss
@import "~sass-ultimate-boilerplate/src/functions";
```
1. Import mixins only:
```scss
@import "~sass-ultimate-boilerplate/src/mixins";
```

## License
The repository code is open-sourced software licensed under the [MIT license](https://github.com/SlimDogs/sass-ultimate-boilerplate/blob/master/LICENSE?raw=true).

## Features