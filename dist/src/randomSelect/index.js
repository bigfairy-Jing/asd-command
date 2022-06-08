"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.default = (function (text) {
    var formatStr = text;
    var randomNum = 1;
    if (text.indexOf('[') !== -1 && text.indexOf(']') !== -1) {
        var reg = /\[(.+?)\]/g;
        formatStr = text.match(reg).toString().slice(1, -1);
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