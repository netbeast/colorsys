
const colorsys = require('../colorsys')
const chai = require('chai');

chai.should()
const expect = chai.expect

describe('colorsys', function() {
  it('should convert rgb <-> hsl', function() {
    const hsl = colorsys.rgb_to_hsl({ r: 255, g: 255, b: 255 })
    expect(hsl).to.deep.equal({ h: 0 , s: 0 , l: 100 })
    const rgb = colorsys.hsl_to_rgb(hsl)
    expect(rgb).to.deep.equal({ r: 255, g: 255, b: 255 })
  })

  it('should convert hex <-> rgb', function() {
    const hex = colorsys.rgb_to_hex({ r: 255, g: 0, b: 255 })
    expect(hex).to.equal('#ff00ff')
    const rgb = colorsys.hex_to_rgb(hex)
    expect(rgb).to.deep.equal({ r: 255, g: 0, b: 255 })
  })

  it('should parse from css', function () {
    const expectedHsla = { h: 140, s: 30, l: 21, a: 0.5 }
    const hslaString = 'hsla(140, 30%, 21%, .5)'
    expect(colorsys.parseCss(hslaString)).to.deep.equal(expectedHsla)
  })

  it('should parse css string as rgb by default', function () {
    const hexParsed = colorsys.parseCss('#aacc33')
    expect(hexParsed).to.deep.equal(colorsys.hex2Rgb('#aacc33'))
  })
})

