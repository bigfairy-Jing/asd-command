"use strict";
// 文档 https://www.exchangerate-api.com/docs/overview
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
var config_1 = require("./config");
exports.default = (function (translateStr, cmd) {
    var keys = Object.keys(cmd);
    var length = keys.length;
    if (length !== 1) {
        (0, utils_1.consoleErr)(lang_1.default.optionError);
        return;
    }
    var type = keys[0];
    switch (type) {
        // 通过选择国家
        case 'selectcountry':
            (0, config_1.selectByMoney)('country');
            break;
        // 通过选择币种
        case 'selectcurrency':
            (0, config_1.selectByMoney)('currency');
            break;
        // 通过输入 a-b编码
        case 'bycode':
            (0, config_1.inputByMoney)(translateStr);
            break;
        // 展示所有币种
        case 'showcode':
            (0, config_1.showCodeTable)('currency');
            break;
        // 展示所有国家
        case 'showcurrency':
            (0, config_1.showCodeTable)('country');
            break;
    }
});
//# sourceMappingURL=index.js.map