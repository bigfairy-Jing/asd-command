"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyByExpre = exports.copyByNum = exports.validArgu = exports.reversalDoubleArray = exports.validN = exports.copyToClipboard = void 0;
// https://github.com/xavi-/node-copy-paste/blob/master/index.js
// 如果未安装 xclip，则无法在 Linux 上运行
// 具体复制问题参考https://github.com/xavi-/node-copy-paste/issues
var copy_paste_1 = __importDefault(require("copy-paste"));
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
var utils_2 = require("../../lib/utils");
var copyToClipboard = function (text, successText) {
    if (successText === void 0) { successText = ''; }
    copy_paste_1.default.copy(text, function () {
        (0, utils_1.consoleSuccess)(successText || lang_1.default.copySuccess);
    });
};
exports.copyToClipboard = copyToClipboard;
// 校验 an + b | an的格式
var validN = function (str) { return /(^[1-9]\d*(n)(\+[1-9]\d*)?$)/.test(str); };
exports.validN = validN;
// 二维数组横纵坐标转换
var reversalDoubleArray = function (arr) {
    var maxLenIndex = 0;
    arr.reduce(function (pre, now, i) { return (now.length > pre.length ? ((maxLenIndex = i), now) : pre); }, []);
    return arr[maxLenIndex].map(function (col, i) { return arr.map(function (row) { return row[i]; }); });
};
exports.reversalDoubleArray = reversalDoubleArray;
var getExpresNumNext = function (exp) {
    if (exp.includes('+')) {
        return +exp.split('+')[1];
    }
    else if (exp.includes('-')) {
        return -+exp.split('-')[1];
    }
    else
        return 0;
};
// 校验传入参数
var validArgu = function (type, args) {
    switch (type) {
        case 'bynumber':
            return args.every(function (arg) { return (0, utils_2.isPositiveNumber)(arg); });
            break;
        case 'byexpre':
            return args.every(function (arg) { return (0, exports.validN)(arg); });
            break;
        default:
            return false;
            break;
    }
};
exports.validArgu = validArgu;
// 顺序数字复制
var copyByNum = function (text, nums, logTable) {
    if (logTable === void 0) { logTable = false; }
    var texts = (0, utils_2.splitTrim)(text);
    var copyTexts = nums.map(function (i) { return texts[i - 1]; });
    (0, exports.copyToClipboard)(copyTexts.join(" "), lang_1.default.successSelectCopy);
    (0, utils_1.consoleSuccess)(copyTexts.join('  '));
    logTable && console.table(copyTexts);
};
exports.copyByNum = copyByNum;
// 表达式复制
var copyByExpre = function (text, expres, logTable) {
    if (logTable === void 0) { logTable = true; }
    var texts = (0, utils_2.splitTrim)(text);
    var expresNumArr = expres.map(function (exp) { return [+exp.split('n')[0], getExpresNumNext(exp)]; });
    var tempArr = [];
    expresNumArr.forEach(function (_a, i) {
        var prep = _a[0], remainder = _a[1];
        tempArr[i] = [];
        texts.forEach(function (text, index) {
            if ((index + 1 - remainder) % prep === 0) {
                tempArr[i].push(text);
            }
        });
    });
    var resultArr = (0, exports.reversalDoubleArray)(tempArr);
    var copyTexts = resultArr.map(function (res) { return res.join(' ----> '); }).join("\n");
    (0, exports.copyToClipboard)(copyTexts, lang_1.default.successSelectCopy);
    logTable && console.table(resultArr);
};
exports.copyByExpre = copyByExpre;
//# sourceMappingURL=config.js.map