"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __importDefault(require("../../lang"));
var format_1 = require("./format");
// eslint-disable-next-line @typescript-eslint/ban-types
exports.default = (function (val, cmd) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    var keys = Object.keys(cmd);
    var length = keys.length;
    if (length > 1) {
        console.error(lang_1.default.optionError);
        return;
    }
    var key = length === 1 ? keys[0] : '';
    switch (key) {
        case 'random':
            (0, format_1.getRandomNum)(val);
            break;
        case 'uniqueid':
            (0, format_1.getUniqueid)();
            break;
        case 'timestamp':
            (0, format_1.getTimeStamp)(val);
            break;
        case 'randomletter':
            (0, format_1.getRandomLetter)(val);
            break;
        case 'randomphone':
            (0, format_1.getRandomPhone)();
            break;
            break;
        case 'randomhue':
            (0, format_1.getRandomHue)();
            break;
        default:
            break;
    }
});
//# sourceMappingURL=index.js.map