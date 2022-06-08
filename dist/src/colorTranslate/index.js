"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
var config_1 = require("./config");
var validColor = function (colorStr) {
    colorStr = (0, utils_1.splitTrim)(colorStr).join('');
    console.log(colorStr);
    if (config_1.rgbaReg.test(colorStr)) {
        return 'rgba';
    }
    if (config_1.hexReg.test(colorStr)) {
        return 'hex';
    }
    return '';
};
exports.default = (function (colorStr) {
    var colorType = validColor(colorStr);
    if (!colorType) {
        (0, utils_1.consoleErr)(lang_1.default.colorInputErr);
    }
    if (colorType === 'rgba') {
        var rgbaArr = colorStr.match(config_1.rgbaReg);
        var r = void 0, g = void 0, b = void 0, a = '';
        r = parseInt(rgbaArr[1]).toString(16);
        r = r.length === 1 ? "0".concat(r) : r;
        g = parseInt(rgbaArr[2]).toString(16);
        g = g.length === 1 ? "0".concat(g) : g;
        b = parseInt(rgbaArr[3]).toString(16);
        b = b.length === 1 ? "0".concat(b) : b;
        if (rgbaArr[5]) {
            a = parseInt(rgbaArr[5]).toString(16);
            a = a.length === 1 ? "0".concat(a) : a;
        }
        console.log(chalk_1.default.green("#".concat(r).concat(g).concat(b).concat(a)));
    }
    else {
        colorStr = colorStr.includes('#') ? colorStr.substring(1) : colorStr;
        // 三位转成六位
        if (colorStr.length === 3)
            colorStr = "".concat(colorStr).concat(colorStr);
        var colorResArr = [];
        for (var i = 0; i < colorStr.length; i += 2) {
            colorResArr.push(parseInt("0x".concat(colorStr.slice(i, i + 2))));
        }
        var res = colorResArr.length === 4
            ? "rgba(".concat(colorResArr[0], ",").concat(colorResArr[1], ",").concat(colorResArr[2], ",").concat(colorResArr[3], ")")
            : "rgba(".concat(colorResArr[0], ",").concat(colorResArr[1], ",").concat(colorResArr[2], ")");
        console.log(chalk_1.default.green(res));
    }
});
//# sourceMappingURL=index.js.map