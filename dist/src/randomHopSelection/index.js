"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
var isInLimit = function (num) {
    return num > 1 && num < 11 && /\d/.test("".concat(num));
};
exports.default = (function (numString, cmd) {
    var _a;
    var keys = Object.keys(cmd);
    var length = keys.length;
    var nums = (0, utils_1.splitTrim)(numString).map(function (x) { return +x; });
    var a = nums[0], b = nums[1];
    if (nums.length !== 2 || !isInLimit(a) || !isInLimit(b)) {
        (0, utils_1.consoleErr)(lang_1.default.optionError2);
        return;
    }
    _a = a > b ? [b, a] : [a, b], a = _a[0], b = _a[1];
    var limit = keys[0] === 'thousand' ? 1000 : 100;
    var result = new Array(limit)
        .fill(1)
        .map(function (x, i) { return i; })
        .filter(function (y) { return y % a !== 0 && y % b !== 0; });
    console.log(JSON.stringify(result));
});
//# sourceMappingURL=index.js.map