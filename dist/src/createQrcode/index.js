"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var qrcode_1 = __importDefault(require("qrcode"));
var utils_1 = require("../../lib/utils");
var createQrcode = function (url) {
    var qrCodeUrl = (0, utils_1.formatLink)(url);
    qrcode_1.default.toString(qrCodeUrl, function (err, str) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(str);
    });
};
exports.default = createQrcode;
//# sourceMappingURL=index.js.map