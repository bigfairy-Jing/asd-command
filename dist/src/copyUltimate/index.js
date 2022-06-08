"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var lang_1 = __importDefault(require("../../lang"));
var utils_1 = require("../../lib/utils");
exports.default = (function (copyStr, opt, cmd) {
    var keys = Object.keys(cmd);
    var length = keys.length;
    var opts = (0, utils_1.splitTrim)(opt);
    if (length !== 1) {
        console.error(lang_1.default.optionError);
        return;
    }
    if (opts.length === 0) {
        (0, utils_1.consoleErr)(lang_1.default.secondParamErr);
    }
    switch (keys[0]) {
        case 'bynumber':
            if (!(0, config_1.validArgu)('bynumber', opts)) {
                (0, utils_1.consoleErr)(lang_1.default.secondParamErr);
                return;
            }
            (0, config_1.copyByNum)(copyStr, opts.map(function (x) { return +x; }));
            break;
        case 'byexpre':
            if (!(0, config_1.validArgu)('byexpre', opts)) {
                (0, utils_1.consoleErr)(lang_1.default.secondParamErr);
                return;
            }
            (0, config_1.copyByExpre)(copyStr, opts);
            break;
    }
});
//# sourceMappingURL=index.js.map