"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ora_1 = __importDefault(require("ora"));
var chalk_1 = __importDefault(require("chalk"));
var spinner = (0, ora_1.default)();
var Spinner = /** @class */ (function () {
    function Spinner() {
    }
    Spinner.log = function (text) {
        spinner.text = chalk_1.default.blue(text);
        spinner.start();
    };
    Spinner.success = function (msg) {
        spinner.stopAndPersist({
            symbol: chalk_1.default.green('✔'),
            text: chalk_1.default.green(msg),
        });
    };
    Spinner.stop = function () {
        spinner.stop();
    };
    Spinner.fail = function (text) {
        spinner.fail(text);
    };
    return Spinner;
}());
exports.default = Spinner;
//# sourceMappingURL=spinner.js.map