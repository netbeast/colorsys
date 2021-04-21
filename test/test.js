
const colorsys = require('../colorsys')
const chai = require('chai')

chai.should()
const expect = chai.expect

describe('colorsys', function() {
  it('should convert rgb <-> hsl', function() {
    const hsl = colorsys.rgb_to_hsl({ r: 255, g: 255, b: 255 })
    expect(hsl).to.deep.equal({ h: 0 , s: 0 , l: 100 })
    const rgb = colorsys.hsl_to_rgb(hsl)
    expect(rgb).to.deep.equal({ r: 255, g: 255, b: 255 })
  })

  it('should convert hex <-> decimal', function() {
    const decimal = colorsys.hex2Decimal('#66d7a9')
    expect(decimal).to.equal(6739881)
    let hex = colorsys.decimal2Hex(6739881)
    expect(hex).to.equal('#66d7a9')
    hex = colorsys.decimal2Hex('6739881')
    expect(hex).to.equal('#66d7a9')
  })

  it('should convert short hex <-> decimal', function() {
    const decimal = colorsys.hex2Decimal('#09F')
    expect(decimal).to.equal(39423)
    let hex = colorsys.decimal2Hex(39423)
    expect(hex).to.equal('#0099ff')
    hex = colorsys.decimal2Hex('39423')
    expect(hex).to.equal('#0099ff')
  })

  it('should convert decimal integers to hex string', function () {
    const hex = colorsys.decimal2Hex(3359829)
    expect(hex).to.equal('#334455')
  })

  it('should convert hex <-> rgb', function() {
    const hex = colorsys.rgb_to_hex({ r: 255, g: 0, b: 255 })
    expect(hex).to.equal('#ff00ff')
    expect(colorsys.hex_to_rgb('#66d7a9'))
      .to.deep.equal({r: 102, g: 215, b: 169})
    const rgb = colorsys.hex_to_rgb(hex)
    expect(rgb).to.deep.equal({ r: 255, g: 0, b: 255 })
  })

  /* There is a small deviation when using negative angles */
  it('should convert hex <-> hsv', function () {
    const blueHsv = { h: 230, s: 80, v: 100 }
    const blueHex = '#3456fe'
    expect(colorsys.hex2Hsv(blueHex)).to.deep.equal(blueHsv)
  })

  /* There is a small deviation when using negative angles */
  it('should convert hex <-> hsv', function () {
    const blueHsv = { h: 230, s: 80, v: 100 }
    const blueHex = '#3456fe'
    expect(colorsys.hex2Hsv(blueHex)).to.deep.equal(blueHsv)
  })

  it('should convert saturated hues to white', function () {
    const hsv = { h: 147, s: 0, v: 100 }
    const hsl = { h: 147, s: 0, l: 100 }
    const cmyk = { c: 0, m: 0, y: 0, k: 0 }
    const white = { r: 255, g: 255, b: 255 }
    expect(colorsys.hsv2Rgb(hsv)).to.deep.equal(white)
    expect(colorsys.hsl2Rgb(hsl)).to.deep.equal(white)
    expect(colorsys.cmyk2Rgb(cmyk)).to.deep.equal(white)
  })

  it('should parse hsla from css', function () {
    const expectedHsla = { h: 140, s: 30, l: 21, a: 0.5 }
    const hslaString = 'hsla(140, 30%, 21%, .5)'
    expect(colorsys.parseCss(hslaString)).to.deep.equal(expectedHsla)
  })

  it('should parse rgba from css', function () {
    const expectedRgba = { r: 115, g: 115, b: 115, a: 0.2 }
    const rgbaString = 'rgba(115, 115, 115, .2)'
    expect(colorsys.parseCss(rgbaString)).to.deep.equal(expectedRgba)
  })

  it('should parse css string as rgb by default', function () {
    let hexParsed = colorsys.parseCss('#aacc33')
    expect(hexParsed).to.deep.equal(colorsys.hex2Rgb('#aacc33'))
    hexParsed = colorsys.parseCss('#09F')
    expect(hexParsed).to.deep.equal(colorsys.hex2Rgb('#0099ff'))
  })

  it('should stringify color objects', function () {
    const rgbObj = colorsys.parseCss('#aacc33')
    expect(colorsys.stringify(rgbObj)).to.equal('rgb(170, 204, 51)')
    const hsvObj = colorsys.rgb2Hsv(rgbObj)
    expect(colorsys.stringify(hsvObj)).to.equal('hsv(73, 75%, 80%)')
  })

  /* There is a small deviation when using negative angles */
  it('should handle negative angles', function () {
    const blueHsl = { h: -130, s: 99, l: 60 }
    const blueHex = '#3456fe'
    const greenHsv = { h: 127, s: 73, v: 96 }
    const greenRgb = { r: 66, g: 244, b: 86 }
    expect(colorsys.hsl2Hex(blueHsl)).to.equal(blueHex)
    expect(colorsys.hsv2Rgb(greenHsv)).to.deep.equal(greenRgb)
  })

  it('should create a random colour in hex', function () {
    const hex = colorsys.random()
    const rgb = colorsys.hex2Rgb(hex)
    expect(hex.length).to.equal(7)
    expect(hex[0]).to.equal('#')
    expect(colorsys.hex2Hsl(hex)).to.deep.equal(colorsys.rgb2Hsl(rgb))
  })

  it('should rotate hue returning a number within 360º', function () {
    const hsl = { h: 280, s: 100, l: 50 }
    const hsv = { h: 0, s: 100, l: 50 }

    expect(colorsys.rotateHue(140)).to.equal(140)
    expect(colorsys.rotateHue(120, 240)).to.equal(0)
    expect(colorsys.rotateHue(160, -400)).to.equal(120)
    expect(colorsys.rotateHue(hsl, 130)).to.contain({h: 50})
    expect(colorsys.rotateHue(hsv, -324)).to.contain({h: 36})
  })

  it('should retrieve the correct stringEnconding', function () {
    expect(colorsys.getColorEncoding({r: 12, g: 14, b: 18})).to.equal('rgb')
    expect(colorsys.getColorEncoding(colorsys.random())).to.equal('hex')
    expect(colorsys.getColorEncoding({h: 150, s: 0.2, v: 0.5})).to.equal('hsv')
    expect(colorsys.getColorEncoding({h: 150, s: 0.2, l: 0.5})).to.equal('hsl')
    expect(colorsys.getColorEncoding({j: 150, f: 0.2, r: 0.5})).to.equal('unknown')
    expect(colorsys.getColorEncoding({c: 150, m: 0.2, y: 0.5, k: 4})).to.equal('cmyk')
  })

  it('should make a color darker', function () {
    expect(colorsys.darken('#FFAA00', 0.5)).to.equal('#805500')
    expect(colorsys.darken({r: 50, g: 170, b: 0}, 0.1)).to.deep.equal({r: 46, g: 153, b: 0})
    expect(colorsys.darken({h: 222.3529411764705, s: 100, v: 66.66666666666666}, 0.2))
      .to.deep.equal({h: 222.3529411764705, s: 100, v: 53})
    expect(colorsys.darken({c: 0, m: 38, y: 100, k: 0}, 0.4))
      .to.deep.equal({c: 0, m: 38, y: 100, k: 40})
    expect(colorsys.darken({h: 50, s: 80, l: 100}, 0.8))
      .deep.equal({h: 50, s: 80, l: 20})
    expect('Bad color input case').equal('Bad color input case')
  })
})

