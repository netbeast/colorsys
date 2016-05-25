
const RGB_MAX = 255
const HUE_MAX = 360
const SV_MAX = 100

var colorsys = module.exports = {}

colorsys.rgb2Hsl = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }
  // It converts [0,255] format, to [0,1]
  r = (r === RGB_MAX) ? 1 : (r % RGB_MAX / parseFloat(RGB_MAX))
  g = (g === RGB_MAX) ? 1 : (g % RGB_MAX / parseFloat(RGB_MAX))
  b = (b === RGB_MAX) ? 1 : (b % RGB_MAX / parseFloat(RGB_MAX))

  var max = Math.max(r, g, b)
  var min = Math.min(r, g, b)
  var h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [{
    h: Math.floor(h * HUE_MAX),
    s: Math.floor(s * SV_MAX),
    l: Math.floor(l * SV_MAX)
  }]
}

colorsys.rgb_to_hsl = colorsys.rgbToHsl = colorsys.rgb2Hsl

colorsys.rgb2Hsv = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }

  // It converts [0,255] format, to [0,1]
  r = (r === RGB_MAX) ? 1 : (r % RGB_MAX / parseFloat(RGB_MAX))
  g = (g === RGB_MAX) ? 1 : (g % RGB_MAX / parseFloat(RGB_MAX))
  b = (b === RGB_MAX) ? 1 : (b % RGB_MAX / parseFloat(RGB_MAX))

  var max = Math.max(r, g, b)
  var min = Math.min(r, g, b)
  var h, s, v = max

  var d = max - min

  s = max === 0 ? 0 : d / max

  if (max === min) {
    h = 0 // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [{
    h: Math.floor(h * HUE_MAX),
    s: Math.floor(s * SV_MAX),
    v: Math.floor(v * SV_MAX)
  }]
}

colorsys.rgb_to_hsv = colorsys.rgbToHsv = colorsys.rgb2Hsv

colorsys.hsl2Rgb = function (h, s, l) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; l = args.l;
  }

  var r, g, b

  h = (h === HUE_MAX) ? 1 : (h % HUE_MAX / parseFloat(HUE_MAX))
  s = (s === SV_MAX) ? 1 : (s % SV_MAX / parseFloat(SV_MAX))
  l = (l === SV_MAX) ? 1 : (l % SV_MAX / parseFloat(SV_MAX))

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    var hue2rgb = function hue2rgb (p, q, t) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s
    var p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }
  return { r: Math.round(r * RGB_MAX), g: Math.round(g * RGB_MAX), b: Math.round(b * RGB_MAX) }
}

colorsys.hsl_to_rgb = colorsys.hslToRgb = colorsys.hsl2Rgb

colorsys.hsv2Rgb = function (h, s, v) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; v = args.v;
  }

  h = (h === HUE_MAX) ? 1 : (h % HUE_MAX / parseFloat(HUE_MAX) * 6)
  s = (s === SV_MAX) ? 1 : (s % SV_MAX / parseFloat(SV_MAX))
  v = (v === SV_MAX) ? 1 : (v % SV_MAX / parseFloat(SV_MAX))

  var i = Math.floor(h)
  var f = h - i
  var p = v * (1 - s)
  var q = v * (1 - f * s)
  var t = v * (1 - (1 - f) * s)
  var mod = i % 6
  var r = [v, q, p, p, t, v][mod]
  var g = [t, v, v, q, p, p][mod]
  var b = [p, p, t, v, v, q][mod]

  return { r: Math.round(r * RGB_MAX), g: Math.round(g * RGB_MAX), b: Math.round(b * RGB_MAX) }
}

colorsys.hsv_to_rgb = colorsys.hsv2Rgb
colorsys.hsvToRgb = colorsys.hsv2Rgb

colorsys.rgb2Hex = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }
  r = Math.round(r).toString(16)
  g = Math.round(g).toString(16)
  b = Math.round(b).toString(16)

  r = r.length === 1 ? '0' + r : r
  g = g.length === 1 ? '0' + g : g
  b = b.length === 1 ? '0' + b : b

  return '#' + r + g + b
}

colorsys.rgb_to_hex = colorsys.rgbToHex = colorsys.rgb2Hex

colorsys.hex2Rgb = function (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

colorsys.hex_to_rgb = colorsys.hexToRgb = colorsys.hex2Rgb

colorsys.hsv2Hex = function (h, s, v) {
  var rgb = colorsys.hsv2Rgb(h, s, v)
  return colorsys.rgb2Hex(rgb.r, rgb.g, rgb.b)
}

colorsys.hsv_to_hex = colorsys.hsv2Hex
colorsys.hsvToHex = colorsys.hsv2Hex

colorsys.hex2Hsv = function (hex) {
  var rgb = colorsys.hex2Rgb(hex)
  return colorsys.rgb2Hsv(rgb.r, rgb.g, rgb.b)[0]
}

colorsys.hex_to_hsv = colorsys.hexToHsv = colorsys.hex2Hsv

colorsys.hsl2Hex = function (h, s, l) {
  var rgb = colorsys.hsl2Rgb(h, s, l)
  return colorsys.rgb2Hex(rgb.r, rgb.g, rgb.b)
}

colorsys.hsl_to_hex = colorsys.hslToHex = colorsys.hsl2Hex

colorsys.hex2Hsl = function (hex) {
  var rgb = colorsys.hex2Rgb(hex)
  return colorsys.rgb2Hsl(rgb.r, rgb.g, rgb.b)[0]
}

colorsys.hex_to_hsl = colorsys.hexToHsl = colorsys.hex2Hsl

colorsys.rgb2cmyk = function (r, g, b) {

  var rprim = r/255
  var gprim = g/255
  var bprim = b/255 

  var k = 1-Math.max(rprim,gprim,bprim)

  var c = (1-rprim-k)/(1-k)
  var m = (1-gprim-k)/(1-k)
  var y = (1-bprim-k)/(1-k)

  return [{
    c: c.toFixed(3),
    m: m.toFixed(3),
    y: y.toFixed(3),
    k: k.toFixed(3)
  }]
}

colorsys.rgb_to_cmyk = colorsys.rgbTocmyk = colorsys.rgb2cmyk

colorsys.cmyk2rgb = function (c, m, y, k) {

  var r = 255*(1-c)*(1-k)
  var g = 255*(1-m)*(1-k)
  var b = 255*(1-y)*(1-k)

  return [{
    r: Math.floor(r),
    g: Math.floor(g),
    b: Math.floor(b)
  }]
}

colorsys.cmyk_to_rgb = colorsys.cmykTorgb = colorsys.cmyk2rgb
