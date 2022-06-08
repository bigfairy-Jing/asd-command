"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomHue = exports.getRandomPhone = exports.getRandomLetter = exports.getTimeStamp = exports.getUniqueid = exports.getRandomNum = void 0;
var chalk_1 = __importDefault(require("chalk"));
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
var node_uuid_1 = __importDefault(require("node-uuid"));
var dayjs_1 = __importDefault(require("dayjs"));
var config_1 = require("./config");
var colorTranslate_1 = __importDefault(require("../colorTranslate"));
var randFormat = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var randomNum = function (step) {
    if (step === void 0) { step = ''; }
    var stepArr = (0, utils_1.splitTrim)(step);
    if (stepArr.length === 1 && !stepArr[0]) {
        stepArr = ['1', '100'];
    }
    var isValid = stepArr.every(function (step) { return /^[0-9]+?$/.test(step); });
    if (!isValid) {
        console.error(lang_1.default.inputNeedNumber);
        return;
    }
    // 1个数字补充 1 - 另一个数字
    stepArr = stepArr.length === 1 ? ['1', stepArr[0]] : stepArr;
    // 生成一个 stepArr[0] - stepArr[1] 之间的随机数
    var numberArr = stepArr.map(function (step) { return +step; });
    var randomNumber = randFormat(Math.min.apply(Math, numberArr), Math.max.apply(Math, numberArr));
    return randomNumber;
};
var getRandomNum = function (step) {
    if (step === void 0) { step = ''; }
    var num = randomNum(step);
    if (num)
        console.log(chalk_1.default.green(num));
};
exports.getRandomNum = getRandomNum;
var getUniqueid = function () {
    console.log(chalk_1.default.green(node_uuid_1.default.v4()));
};
exports.getUniqueid = getUniqueid;
var getTimeStamp = function (val) {
    if (val === void 0) { val = ''; }
    try {
        console.log(chalk_1.default.green("\n      ".concat(val ? (0, dayjs_1.default)(val).valueOf() : (0, dayjs_1.default)().valueOf(), "\n      ").concat(val ? (0, dayjs_1.default)(val).unix() : (0, dayjs_1.default)().unix(), "\n    ")));
    }
    catch (error) {
        console.error(lang_1.default.translateTimeErro);
    }
};
exports.getTimeStamp = getTimeStamp;
var getRandomLetter = function (val) {
    if (!/(^[1-9]\d*$)/.test(val)) {
        console.error(lang_1.default.inputNeedNumber);
        return;
    }
    var len = +val;
    var res = new Array(len)
        .fill('')
        .map(function () {
        var rlIndex = Math.floor(Math.random() * config_1.charsStr.length);
        return config_1.charsStr.charAt(rlIndex);
    })
        .join('');
    console.log(chalk_1.default.green(res));
};
exports.getRandomLetter = getRandomLetter;
var getRandomPhone = function () {
    var prefixArr = __spreadArray([], config_1.phoneNumberPre, true);
    var i = +randomNum("".concat(prefixArr.length)) - 1;
    var phone = prefixArr[i];
    for (var j = 0; j < 8; j++) {
        phone += Math.floor(Math.random() * 10);
    }
    console.log(chalk_1.default.green(phone));
};
exports.getRandomPhone = getRandomPhone;
// 获取随机颜色
var getRandomHue = function () {
    var str = '';
    for (var i = 0; i < 6; i++) {
        str += config_1.sixteen[parseInt("".concat(Math.random() * 16))];
    }
    (0, colorTranslate_1.default)(str);
    console.log(chalk_1.default.green("#".concat(str)));
};
exports.getRandomHue = getRandomHue;
//# sourceMappingURL=format.js.map