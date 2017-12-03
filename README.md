<p align="center">
  <a href="https://github.com/SlimDogs/sass-ultimate-boilerplate"><img src="https://github.com/SlimDogs/sass-ultimate-boilerplate/blob/master/docs/assets/logo.png?raw=true" alt="Sass ultimate boilerplate" title="Sass ultimate boilerplate" height="200px"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/sass-ultimate-boilerplate" target="_blank"><img src="https://badge.fury.io/js/sass-ultimate-boilerplate.svg" alt="npm version" title="npm version"></a>
  <a href="#" target="_blank"><img src="https://travis-ci.org/SlimDogs/sass-ultimate-boilerplate.svg?branch=master" alt="Latest CI build status" title="Latest CI build status"></a>
  <a href="https://github.com/semantic-release/semantic-release" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic release" title="Semantic release"></a>
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
*Ultimate Sass boilerplate* is useful when starting a new web project.

It includes such [goodies](#features) as `functions`, `mixins`, `animations`.

## installation
* If you are using yarn run `yarn add sass-ultimate-boilerplate --save`
* If you prefer npm run `npm install sass-ultimate-boilerplate --save`

## How to use
- In one of your *scss* files (preferably the very "root" scss file) add line to import `sass-ultimate-boilerplate`:
   ```scss
   @import "~sass-ultimate-boilerplate/src/usb";
   ```

- When developing encapsulated components (for example _Angular_ components) you can also import `animations`, `functions` and `mixins` separately:
   * Import animations only:
     ```scss
     @import "~sass-ultimate-boilerplate/src/usb-animations";
     ```
   * Import functions only:
     ```scss
     @import "~sass-ultimate-boilerplate/src/usb-functions";
     ```
   * Import mixins only:
     ```scss
     @import "~sass-ultimate-boilerplate/src/usb-mixins";
     ```

## License
The repository code is open-sourced software licensed under the [MIT license](https://github.com/SlimDogs/sass-ultimate-boilerplate/blob/master/LICENSE?raw=true).

## Features
### Animations
- [Float](#float)
- [Pulse](#pulse)
- [Spin](#spin)

### Functions
- [Pixels to rem](#pixels-to-rem)
- [Clean z-index](#clean-z-index)

### Mixins
- [Absolute](#absolute)
- [Blur](#blur)
- [Border radius](#border-radius)
- [Box shadow](#box-shadow)
- [Flex order](#flex-order)
- [Gradient](#gradient)
- [Animation and keyframes](#animation-and-keyframes)
- [Media queries](#media-queries)
- [Opacity](#opacity)
- [Parallax background](#parallax-background)
- [Placeholder](#placeholder)
- [Prefix or Vendorize](#prefix-or-vendorize)
- [Transition](#transition)

### Pixels to rem
- `Type:` Function
- `Description:` Convert pixels to rems
- `Variables:`
> 🔖`$usb-font-base` - optional variable for base font size (you can also pass second argument to the function e.g. `usb-px-to-rem(45px, 14px);`

Usage:
```scss
div { height: usb-px-to-rem(45px); }
```

### Clean z index
- `Type:` Function
- `Description:` Helps to set `z-index` for your elements
- `Variables`:
> 🔖 `$usb-z-indexes` - array of specifically ordered option (for default value look below)
```scss
$usb-z-indexes: (
"outdated-browser",
"modal",
"site-header",
"page-wrapper",
"site-footer"
);
```

Usage:
```scss
.header { z-index: usb-z-index('site-header'); }
```

### Absolute
- `Type:` Mixin
- `Description:` Helps setting absolute position with same position value for all sides

Usage:
```scss
.absoluted-element { @include usb-absolute(10px); }
```

### Blur
- `Type:` Mixin
- `Description:` Vendorized blur

Usage:
```scss
.blured-text { @include usb-blur(0.8); }
```

### Border-radius
- `Type:` Mixin
- `Description:` Vendorized border-radius

Usage:
```scss
.card { @include usb-border-radius(0.8); }
```

### Box-shadow
- `Type:` Mixin
- `Description:` Vendorized box-shadow

Usage:
```scss
.ninja-in-the-shadow { @include usb-box-shadow(5px, 3px, 10px, #000); }
```

### Flex-order
- `Type:` Mixin
- `Description:` Vendorized flex-order

Usage:
```scss
.display-second { @include usb-flex-order(-1); }
```

### Gradient
- `Type:` Mixin
- `Description:` Easy way for creating gradient backgrounds

Usage:
```scss
.test-1 { @include usb-linear-gradient(#31B7D7, #EDAC7D); }
.test-2 { @include usb-linear-gradient(to right, #E47D7D 0%, #C195D3 50%, #4FB4E8 100%); }
.test-3 { @include usb-linear-gradient(42deg, #B58234 0%, #D2B545 50%, #D7C04D 50.01%, #FFFFFF 100%); }
```

### Animation and keyframes
- `Type:` Mixin
- `Description:` Vendorized animation & keyframes

Usage:
```scss
@include usb-keyframes(slide-down) {
0% { opacity: 1; }
90% { opacity: 0; }
}

.animated-element { @include usb-animation('slide-down 5s 3'); }
```

### Media queries
- `Type:` Mixin
- `Description:` Easy media queries!
- `Variables:`
> 🔖 `$usb-grid-breakpoints` - array holding breakpoints sizes (for default value look below)
```scss
$usb-grid-breakpoints: ( xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1330px);
```

Usage:
```scss
.element {
@include usb-media-xs() { background-color: white; };
}
```

### Opacity
- `Type:` Mixin
- `Description:` Vendorized opacity

Usage:
```scss
.faded-text { @include usb-opacity(0.8); }
```

### Parallax background
- `Type:` Mixin
- `Description:` Easy way to create parallax image background

Usage:
```scss
.header { @include usb-parallax-background('/assets/images/header2_offset.jpg'); }
```

### Placeholder
- `Type:` Mixin
- `Description:` Easy way to set placeholder style

Usage:
```scss
input.password-italic {
@include usb-placeholder { font-style:italic; }
}
```

### Prefix or Vendorize
- `Type:` Mixin
- `Description:` Prefix / vendorize without a problem

Usage:
```scss
.icon { @include usb-prefix(transform, rotate(45deg), webkit ms); }
```

### Transition
- `Type:` Mixin
- `Description:` Vendorized transition

Usage:
```scss
.animated-div { @include usb-transition(color .3s ease); }
```

### Float
- `Type:` Animation
- `Description:` Floating/hovering animation
- `Variables:`
> 🔖 `$usb-float-animation-speed` - animation speed (default value is `4s`)

Usage:
```scss
div { @extend %usb-animation-float; }
```

### Pulse
- `Type:` Animation
- `Description:` Pulsing shadow/outline animation
- `Variables:`
> 🔖 `$usb-pulse-animation-speed` - animation speed (default is `2s`)
> 🔖 `$usb-pulse-animation-primary-color` - primary pulsation color (default value is `rgba(38, 166, 154, 0.4)`)
> 🔖 `$usb-pulse-animation-secondary-color` - secondary pulsation color (default value is `rgba(38, 166, 154, 0)`)

Usage:
```scss
div { @extend %usb-animation-pulse; }
```

### Spin
- `Type:` Animation
- `Description:` 360deg infinite spinning animation
- `Variables:`
> 🔖 `$usb-spin-animation-speed` - animation speed (default value is `0.5s`)

Usage:
```scss
div { @extend %usb-animation-spin; }
```
