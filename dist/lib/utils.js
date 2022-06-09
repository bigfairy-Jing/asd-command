"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootDir = exports.sizeTranslte = exports.isImgFilePath = exports.formatLink = exports.isPathType = exports.isPositiveNumber = exports.splitTrim = exports.validNodeVersion = exports.verifyArgs = exports.PathTypeEnum = exports.consoleSuccess = exports.consoleErr = exports.div = exports.mul = void 0;
var semver_1 = __importDefault(require("semver"));
var chalk_1 = __importDefault(require("chalk"));
var lodash_1 = __importDefault(require("lodash"));
var fs_1 = __importDefault(require("fs"));
var lang_1 = require("../lang");
var reg_1 = __importDefault(require("./reg"));
var package_json_1 = require("../package.json");
var decimal_js_1 = __importDefault(require("decimal.js"));
var minimist_1 = __importDefault(require("minimist"));
var mul = function (num, dep) { return new decimal_js_1.default(+num).mul(+dep).toNumber(); };
exports.mul = mul;
var div = function (num, dep) { return new decimal_js_1.default(+num).div(+dep).toNumber(); };
exports.div = div;
var consoleErr = function (str) {
    console.log(chalk_1.default.red("\n \uD83D\uDE14 ".concat(str)));
};
exports.consoleErr = consoleErr;
var consoleSuccess = function (str) {
    console.log("\uD83C\uDF89  ".concat(str));
};
exports.consoleSuccess = consoleSuccess;
var PathTypeEnum;
(function (PathTypeEnum) {
    PathTypeEnum["FILE"] = "file";
    PathTypeEnum["DIRECTORY"] = "directory";
    PathTypeEnum["UNKNOWN"] = "unknown";
})(PathTypeEnum = exports.PathTypeEnum || (exports.PathTypeEnum = {}));
exports.default = {
    deepCopy: function (x) {
        return lodash_1.default.cloneDeep(x);
    },
    isEmpty: function (x) {
        return [null, undefined, ''].includes(x);
    },
    isObject: function (x) {
        return lodash_1.default.isObject(x);
    },
};
var verifyArgs = function (name, len) {
    if (len === void 0) { len = 1; }
    // consoleErr(JSON.stringify(minimist(process.argv.slice(2))._));
    if ((0, minimist_1.default)(process.argv.slice(3))._.length > len) {
        (0, exports.consoleErr)(lang_1.langFormatData.getArgsErr(name, len));
        process.exit(9);
    }
};
exports.verifyArgs = verifyArgs;
var validNodeVersion = function () {
    if (!semver_1.default.satisfies(process.version, package_json_1.nodeVersion)) {
        console.log(chalk_1.default.red(lang_1.langFormatData.vaildVersion(package_json_1.name, package_json_1.nodeVersion)));
        return false;
    }
    return true;
};
exports.validNodeVersion = validNodeVersion;
var splitTrim = function (str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/);
};
exports.splitTrim = splitTrim;
var isPositiveNumber = function (num) { return /(^[1-9]\d*$)/.test("".concat(num)); };
exports.isPositiveNumber = isPositiveNumber;
var isPathType = function (str) {
    var stat = fs_1.default.lstatSync(str);
    if (stat.isDirectory())
        return 'directory';
    if (stat.isFile())
        return 'file';
    return 'unknown';
};
exports.isPathType = isPathType;
var formatLink = function (link) {
    return link.includes('http://') || link.includes('https:') ? link : "http://".concat(link);
};
exports.formatLink = formatLink;
var isImgFilePath = function (str) {
    return (0, exports.isPathType)(str) === PathTypeEnum.FILE && reg_1.default.img.val.test(str);
};
exports.isImgFilePath = isImgFilePath;
var sizeTranslte = function (size, type) {
    if (type === void 0) { type = 'ByteToKB'; }
    switch (type) {
        case 'ByteToKB':
            return (0, exports.div)(size, 1024).toFixed(2);
            break;
        case 'KBToByte':
            return (0, exports.mul)(size, 1024);
            break;
        case 'ByteToMB':
            return (0, exports.div)(size, 1024 * 1024).toFixed(2);
            break;
    }
};
exports.sizeTranslte = sizeTranslte;
var getRootDir = function () { return fs_1.default.realpathSync(process.cwd()); };
exports.getRootDir = getRootDir;
//# sourceMappingURL=utils.js.map