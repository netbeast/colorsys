declare module "colorsys" {
    export interface RGB {
        r: number;
        g: number;
        b: number;
    }

    export interface HSV {
        h: number;
        s: number;
        v: number;
    }

    export interface HSL {
        h: number;
        s: number;
        l: number;
    }

    export interface CMYK {
        c: number;
        m: number;
        y: number;
        k: number;
    }

    //convert RGB to *
    export function rgb2Hsl(r: number, g: number, b: number): HSL;
    export function rgb2Hsl(rgb: RGB): HSL;
    export function rgb_to_hsl(r: number, g: number, b: number): HSL;
    export function rgb_to_hsl(rgb: RGB): HSL;
    export function rgbToHsl(r: number, g: number, b: number): HSL;
    export function rgbToHsl(rgb: RGB): HSL;

    export function rgb2Hsv(r: number, g: number, b: number): HSV;
    export function rgb2Hsv(rgb: RGB): HSV;
    export function rgb_to_hsv(r: number, g: number, b: number): HSV;
    export function rgb_to_hsv(rgb: RGB): HSV;
    export function rgbToHsv(r: number, g: number, b: number): HSV;
    export function rgbToHsv(rgb: RGB): HSV;

    export function rgb2Hex(r: number, g: number, b: number): string;
    export function rgb2Hex(rgb: RGB): string;
    export function rgb_to_hex(r: number, g: number, b: number): string;
    export function rgb_to_hex(rgb: RGB): string;
    export function rgbToHex(r: number, g: number, b: number): string;
    export function rgbToHex(rgb: RGB): string;

    export function rgb2Cmyk(r: number, g: number, b: number): CMYK;
    export function rgb2Cmyk(rgb: RGB): CMYK;
    export function rgb_to_cmyk(r: number, g: number, b: number): CMYK;
    export function rgb_to_cmyk(rgb: RGB): CMYK;
    export function rgbToCmyk(r: number, g: number, b: number): CMYK;
    export function rgbToCmyk(rgb: RGB): CMYK;


    //convert HSV to *
    export function hsv2Rgb(h: number, s: number, v: number): RGB;
    export function hsv2Rgb(hsv: HSV): RGB;
    export function hsv_to_rgb(h: number, s: number, v: number): RGB;
    export function hsv_to_rgb(hsv: HSV): RGB;
    export function hsvToRgb(h: number, s: number, v: number): RGB;
    export function hsvToRgb(hsv: HSV): RGB;

    export function hsv2Hex(h: number, s: number, v: number): string;
    export function hsv2Hex(hsv: HSV): string;
    export function hsv_to_hex(h: number, s: number, v: number): string;
    export function hsv_to_hex(hsv: HSV): string;
    export function hsvToHex(h: number, s: number, v: number): string;
    export function hsvToHex(hsv: HSV): string;

    export function hsv2Hsl(h: number, s: number, v: number): HSL;
    export function hsv2Hsl(hsv: HSV): HSL;
    export function hsv_to_hsl(h: number, s: number, v: number): HSL;
    export function hsv_to_hsl(hsv: HSV): HSL;
    export function hsvToHsl(h: number, s: number, v: number): HSL;
    export function hsvToHsl(hsv: HSV): HSL;

    //convert HSL to *
    export function hsl2Rgb(h: number, s: number, l: number): RGB
    export function hsl2Rgb(hsl: HSL): RGB
    export function hsl_to_rgb(h: number, s: number, l: number): RGB;
    export function hsl_to_rgb(hsl: HSL): RGB;
    export function hslToRgb(h: number, s: number, l: number): RGB;
    export function hslToRgb(hsl: HSL): RGB;

    export function hsl2Hex(h: number, s: number, l: number): string;
    export function hsl2Hex(hsl: HSL): string;
    export function hsl_to_hex(h: number, s: number, l: number): string;
    export function hsl_to_hex(hsl: HSL): string;
    export function hslToHex(h: number, s: number, l: number): string;
    export function hslToHex(hsl: HSL): string;

    export function hsl2Hsv(h: number, s: number, l: number): HSV;
    export function hsl2Hsv(hsl: HSL): HSV;
    export function hsl_to_hsv(h: number, s: number, l: number): HSV;
    export function hsl_to_hsv(hsl: HSL): HSV;
    export function hslToHsv(h: number, s: number, l: number): HSV;
    export function hslToHsv(hsl: HSL): HSV;

    //convert HEX to *
    export function hex2Rgb(hex: string): RGB;
    export function hex2Rgb(hex: string): RGB;
    export function hex_to_rgb(hex: string): RGB;
    export function hex_to_rgb(hex: string): RGB;
    export function hexToRgb(hex: string): RGB;
    export function hexToRgb(hex: string): RGB;
    export function hex_to_hsv(hex: string): HSV;
    export function hex_to_hsv(hex: string): HSV;
    export function hexToHsv(hex: string): HSV;
    export function hexToHsv(hex: string): HSV;
    export function hex2Hsv(hex: string): HSV;
    export function hex2Hsv(hex: string): HSV;
    export function hex2Hsl(hex: string): HSL;
    export function hex2Hsl(hex: string): HSL;
    export function hex_to_hsl(hex: string): HSL;
    export function hex_to_hsl(hex: string): HSL;
    export function hexToHsl(hex: string): HSL;
    export function hexToHsl(hex: string): HSL;


    //convert CMYK to *
    export function cmyk2Rgb(c: number, m: number, y: number, k: number): RGB;
    export function cmyk2Rgb(cmyk: CMYK): RGB;
    export function cmyk_to_rgb(c: number, m: number, y: number, k: number): RGB;
    export function cmyk_to_rgb(cmyk: CMYK): RGB;
    export function cmykToRgb(c: number, m: number, y: number, k: number): RGB;
    export function cmykToRgb(cmyk: CMYK): RGB;


    //others
    export function parseCss(cssString: string): any;
    export function parse_css(cssString: string): any;
    export function stringify(obj: RGB | HSV | HSL | CMYK): string;
    export function hex_to_decimal(hexColor: string): number;
    export function hexToDecimal(hexColor: string): number;
    export function hex2Decimal(hexColor: string): number;
    export function decimal_to_hex(decimalColor: number | string): string;
    export function decimalToHex(decimalColor: number | string): string;
    export function decimal2Hex(decimalColor: number | string): string;
    export function random(): string;
    export function rotateHue<T extends number | HSL | HSV>(hue: T, amount: number): T;
    export function getColorEncoding(color: any): "unknown" | "hex" | "rgb" | "hsv" | "hsl" | "cmyk";
    export function any2Hsl(color: any): HSL | "unknown";
    export function any_to_hsl(color: any): HSL | "unknown";
    export function anyToHsl(color: any): HSL | "unknown";
    export function getTransformEncodingFunction(color: any, desiredEncoding: any): any;
    export function darken(color: any, percentage: any): any;
}
