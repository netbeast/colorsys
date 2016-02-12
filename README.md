# colorsys

Colorsys is a simple javascript color conversion library that allows conversion between RGB, HSL, HSV and HEX

## install

**With npm**
```
npm install colorsys
```

**Load on browser or copy paste into your code**
```
<script src="http://netbeast.github.io/colorsys/browser.js"></script>
```

## api
the input parameter could be an object `({r: 50, g: 100, b: 0})` or 3 integers `(50, 100, 0)`

```
colorsys.rgb_to_hsl({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , l: 100 }
```

aliases: _rgbToHsl_, _rgb2Hsl_

```
colorsys.rgb_to_hsv({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , v: 100 }
```

aliases: _rgb2Hsv_, _rgbToHsv_

```
colorsys.hsl_to_rgb({ h: 0 , s: 0 , l: 100 }) => { r: 255, g: 255, b: 255 }
```

aliases: _hsl2Rgb_, _hslToRgb_

```
colorsys.hsv_to_rgb({ h: 0 , s: 0 , v: 100 }) => { r: 255, g: 255, b: 255 }
```

aliases: _hsv2Rgb_, _hsvToRgb_

```
colorsys.rgb_to_hex({ r: 255, g: 255, b: 255 }) => '#ffffff'
```

aliases: _rgb2Hex_, _rgbToHex_

```
colorsys.hex_to_rgb('#ffffff') => { r: 255, g: 255, b: 255 }
```

aliases: _hex2Rgb_, _hexToRgb_

```
colorsys.hsv_to_hex({ r: 255, g: 255, b: 255 }) => '#ffffff'
```

aliases: _hsv2Hex_, _hsvToHex_

```
colorsys.hex_to_hsv('#ffffff') => {h: 0 , s: 0 , v: 100 }
```

aliases: _hex2Hsv_, _hexToHsv_

```
colorsys.hsl_to_hex({r: 255, g: 255, b: 255}) => '#ffffff'
```

aliases: _hsl2Hex_, _hslToHex_

```
colorsys.hex_to_hsl('#ffffff') => {h: 0 , s: 0 , l: 100 }
```

aliases: _hex2Hsl_, _hexToHsl_

## example
```
var colorsys = require('colorsys')

colorsys.hex_to_hsv('#ffffff')    //  { h: 0, s: 0, v: 100 }

colorsys.rgb_to_hsv({r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , v: 100 }
```

There are some formats missing like `YIQ`, `HWB`, `CMYK`, `ansii` and `ansi16`. Please help us to complete this library making a pull request. 

## Contact
* Visit our site [https://netbeast.co](https://netbeast.co)
* Mail us: staff [at] netbeast.co
* Report a bug or enter discussion at [issues](https://github.com/netbeast/colorsys/issues)
* Other resources: [Docs](https://github.com/netbeast/docs/wiki), Netbeast [API](https://github.com/netbeast/API)

This repo is shared with :heart: from Netbeast IoT regular job translating
messages from different devices and aggregating data.
