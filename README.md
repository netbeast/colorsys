# colorsys

Colorsys is a simple javascript color conversion library that allows conversion between RGB, HSL, HSV and HEX

## install

```
npm install colorsys
``
## api
the input parameter could be an object `({r: 50, g: 100, b: 0})` or 3 integers `(50, 100, 0)`
```
colorsys.rgb_to_hsl({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , l: 100 }
``
aliases: `rgbToHsl`, `rgb2Hsl`
```
colorsys.rgb_to_hsv({ r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , v: 100 }
``
aliases: `rgb2Hsv`, `rgbToHsv`
```
colorsys.hsl_to_rgb({ h: 0 , s: 0 , l: 100 }) => { r: 255, g: 255, b: 255 }
``
aliases: `hsl2Rgb`, `hslToRgb`
```
colorsys.hsv_to_rgb({ h: 0 , s: 0 , v: 100 }) => { r: 255, g: 255, b: 255 }
``
aliases: `hsv2Rgb`, `hsvToRgb`
```
colorsys.rgb_to_hex({ r: 255, g: 255, b: 255 }) => '#ffffff'
``
aliases: `rgb2Hex`, `rgbToHex`
```
colorsys.hex_to_rgb('#ffffff') => { r: 255, g: 255, b: 255 }
``
aliases: `hex2Rgb`, `hexToRgb`
```
colorsys.hsv_to_hex({ r: 255, g: 255, b: 255 }) => '#ffffff'
``
aliases: `hsv2Hex`, `hsvToHex`
```
colorsys.hex_to_hsv('#ffffff') => {h: 0 , s: 0 , v: 100 }
``
aliases: `hex2Hsv`, `hexToHsv`
```
colorsys.hsl_to_hex({r: 255, g: 255, b: 255}) => '#ffffff'
``
aliases: `hsl2Hex`, `hslToHex`
```
colorsys.hex_to_hsl('#ffffff') => {h: 0 , s: 0 , l: 100 }
``
aliases: `hex2Hsl`, `hexToHsl`

## example
```
var colorsys = require('colorsys')

colorsys.hex_to_hsv('#ffffff')    //  { h: 0, s: 0, v: 100 }

colorsys.rgb_to_hsv({r: 255, g: 255, b: 255 }) => { h: 0 , s: 0 , v: 100 }
``

There are some formats missing like `YIQ`, `HWB`, `CMYK`, `ansii` and `ansi16`. Please help us to complete this library making a pull request. 

## Contact
* Visit our site [https://netbeast.co](https://netbeast.co)
* Mail us: staff [at] netbeast.co
* Report a bug or enter discussion at [issues](https://github.com/netbeast/colorsys/issues)
* Other resources: [Docs](https://github.com/netbeast/docs/wiki), Netbeast [API](https://github.com/netbeast/API)
