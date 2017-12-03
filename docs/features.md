## Animations
- [Float](#float)
- [Pulse](#pulse)
- [Spin](#spin)

## Functions
- [Pixels to rem](#pixels-to-rem)
- [Fixed Z index](#fixed-z-index)

## Mixins
- [Absolute](#absolute)
- [Blur](#blur)
- [Border radius](#border-radius)
- [Box shadow](#box-shadow)
- [Flex order](#flex-order)
- [Gradient](#gradient)
- [Animation and keyframes](#animation-and-keyframes)
- [Opacity](#opacity)
- [Parallax background](#parallax-background)
- [Placeholder](#placeholder)
- [Prefix or Vendorize](#prefix-or-vendorize)
- [Transition](#transition)

### Pixels to rem
- `Type:` Function
- `Description:` Convert pixels to rems easealy

Usage:
```div {
height: pxToRem(45px);
}```

### Fixed Z index
- `Type:` Function
- `Description:` Have and use a ordered and listed z-index values!

Usage:
```div.header {
z-index: z('site-header');
}```

### Float
- `Type:` Animation
- `Description:` Floating/hovering animation

Usage:
```div {
@extend %animation-float;
}```

### Pulse
- `Type:` Animation
- `Description:` Pulsing shadow/outline animation

Usage:
```div {
@extend %pulse;
}```

### Spin
- `Type:` Animation
- `Description:` 360deg infinite spinning animation

Usage:
```div {
@extend %spin;
}```

### Absolute
- `Type:` Mixin
- `Description:` Shortcut for setting position absolute with all positions containing same value

Usage:
```div {
@include absolute(10px);
}```

### Blur
- `Type:` Mixin
- `Description:` Vendorized blur

Usage:
```.blured-text {
@include blur(0.8);
}```

### Border-radius
- `Type:` Mixin
- `Description:` Vendorized border-radius shortcut

Usage:
```.card {
@include border-radius(0.8);
}```

### Box-shadow
- `Type:` Mixin
- `Description:` Vendorized box-shadow shortcut

Usage:
```.element {
@include box-shadow(5px, 3px, 10px, #000);
}```

### Flex-order
- `Type:` Mixin
- `Description:` Vendorized flex-order shortcut

Usage:
```.card {
@include flex-order(-1);
}```

### Gradient
- `Type:` Mixin
- `Description:` Comfortable way of setting css gradients!

Usage:
```.test-1 {
@include linear-gradient(#31B7D7, #EDAC7D);
}

.test-2 {
@include linear-gradient(to right, #E47D7D 0%, #C195D3 50%, #4FB4E8 100%);
}

.test-3 {
@include linear-gradient(42deg, #B58234 0%, #D2B545 50%, #D7C04D 50.01%, #FFFFFF 100%);
}```

### Animation and keyframes
- `Type:` Mixin
- `Description:` Vendorized animation & keyframes shortcut

Usage:
```@include keyframes(slide-down) {
0% { opacity: 1; }
90% { opacity: 0; }
}

.element {
width: 100px;
height: 100px;
background: black;
@include animation('slide-down 5s 3');
}```

### Media queries
- `Type:` Mixin
- `Description:` Easy media queries!

Usage:
```.element {
width: 100px;
height: 100px;
background-color: black;

@include media-xs() {
background-color: white;
};
}```

### Opacity
- `Type:` Mixin
- `Description:` Vendorized opacity shortcut

Usage:
```.faded-text {
@include opacity(0.8);
}```

### Parallax background
- `Type:` Mixin
- `Description:` Set parallax image backfround easy!

Usage:
```div.msm-header {
@include parallax-background('/assets/images/header2_offset.jpg');
}```

### Placeholder
- `Type:` Mixin
- `Description:` Easy way of setting placeholder stylings

Usage:
```input.element {
@include placeholder {
font-style:italic;
color: white;
font-weight:100;
}
}```

### Prefix or Vendorize
- `Type:` Mixin
- `Description:` Prefix or vendorize your style attributes

Usage:
```span.icon {
@include prefix(transform, rotate(45deg), webkit ms);
}```

### Transition
- `Type:` Mixin
- `Description:` Vendorized transitions

Usage:
```a {
color: gray;
@include transition(color .3s ease);
}```
