"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.default = (function (text) {
    var formatStr = text;
    var randomNum = 1;
    var reg = /\[(.+?)\]/g;
    var matchs = text.match(reg);
    // 存在中括号的情况 例如  18 [吃饭 不吃饭]
    if (matchs && matchs.length) {
        formatStr = matchs.toString().slice(1, -1);
        randomNum = Number.isInteger(+text.split(/\s+/)[0]) ? +text.split(/\s+/)[0] : 1;
    }
    var randomArr = formatStr.split(/\s+/);
    var len = randomArr.length;
    var showStr = new Array(randomNum)
        .fill('')
        .map(function () {
        return "\n          ".concat(randomArr[Math.floor(Math.random() * len)]);
    })
        .reduce(function (prev, next) { return prev + next; });
    console.log(chalk_1.default.green(showStr));
});
//# sourceMappingURL=index.js.map