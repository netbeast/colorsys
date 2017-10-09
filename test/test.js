
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
    const hex = colorsys.rgb_to_hex({ r: 255, g: 255, b: 255 })
    expect(hex).to.equal('#ffffff')
    const rgb = colorsys.hex_to_rgb(hex)
    expect(rgb).to.deep.equal({ r: 255, g: 255, b: 255 })
  })
})

