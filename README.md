# colorsys
[![CircleCI](https://circleci.com/gh/netbeast/colorsys.svg?style=svg)](https://circleci.com/gh/netbeast/colorsys)
![npm version](https://badge.fury.io/js/colorsys.svg)

**Colorsys** is a simple javascript color conversion library that allows bidirectional color conversion.
**Lightweight**, **immutable**. With support for RGB, HEX, HSV, HSL and CMYK and CSS strings.

## install

**With npm**
```
npm install colorsys
```

**Load on browser or copy paste into your code**
```
<script src="https://unpkg.com/colorsys@1.0.11/colorsys.js"></script>
```


## example
```javascript
var colorsys = require('colorsys')
const hsl = colorsys.parseCss('hsl(0, 0%, 100%)') //  { h: 0, s: 0, l: 100 }
colorsys.hsl2Hex(hsl) // '#ffffff'
const hsv = colorsys.rgb_to_hsv({r: 255, g: 255, b: 255 })
colorsys.stringify(hsv) // 'hsv(0, 0%, 100%)'
// Parsing an hex string will result in a RGB object!
colorsys.parseCss('#ff00ff') // { r: 255, g: 0, b: 255 }
```

For more examples please visit the [tests](test/test.js)

## API
For any method the input arguments can be an object `(r: 50, g: 100, b: 0}` or a set of integers `50, 100, 0`. You have aliases in both snake_case (`hex_to_hsl`) or `rgb2Hex`, `hsv2Rgb` form.

* `colorsys.parseCss(color: string)` will parse a color string in an object with the same keys.
* `colorsys.stringify(color: Object)` will output a valid css string.
* `colorsys.rgb_to_hsl({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , l: 100 }`
* `colorsys.rgb_to_hsv({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , v: 100 }`

Try with any combination. Look at the [source](colorsys.js) to double check!
* `colorsys.hslToRgb`
* `colorsys.hsvToRgb`
* `colorsys.rgbToHex`
* `colorsys.hexToRgb`
* `colorsys.hsvToHex`
* `colorsys.hexToHsv`
* `colorsys.hslToHex`
* `colorsys.hexToHsl`
* `colorsys.rgb2cmyk`
* `colorsys.cmyk2rgb`

Other methods:
* Generate a random hex color: `colorsys.random()`
* Rotate a color hue: `colorsys.rotateHue(120, 120)` will output `240`.
You can also use HSL or HSV objects as `rotateHue(hsv, 120)` will output
an object containing `{h: 240}`.

There are some formats missing like `YIQ`, `HWB`, `ansii` and `ansi16`. Please help us to complete this library making a pull request. 

## Contact
* Mail us: staff [at] netbeast.co
* Report a bug or enter discussion at [issues](https://github.com/netbeast/colorsys/issues)
* [Twitter](https://twitter.com/YetiSmartHome)

This repo is shared with :heart: from Netbeast. This package powers [Yeti Smart Home](https://getyeti.co) and is used in production.

<a href="https://getyeti.co" target="_blank">
   <img alt="works with yeti" src="https://github.com/netbeast/react-native-big-slider/raw/master/works-with-yeti.png" width="100" />
</a>
