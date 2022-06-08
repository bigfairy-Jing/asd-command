"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var mime_types_1 = __importDefault(require("mime-types"));
var lang_1 = __importDefault(require("../../lang"));
var reg_1 = __importDefault(require("../../lib/reg"));
var utils_1 = require("../../lib/utils");
var config_1 = require("../copyUltimate/config");
var imgToBase64 = function (imgLink) {
    var stat = fs_1.default.lstatSync(imgLink);
    if (!stat.isFile() && reg_1.default.img.val.test(imgLink)) {
        (0, utils_1.consoleErr)(lang_1.default.showInputImgFile);
        return;
    }
    if (stat.size > 1024 * 1024 * 100) {
        (0, utils_1.consoleErr)(lang_1.default.inputImgMaxSize);
        return;
    }
    var filePath = path_1.default.resolve(imgLink);
    var fileMimeType = mime_types_1.default.lookup(filePath);
    var fileData = fs_1.default.readFileSync(filePath);
    var base64Data = Buffer.from(fileData).toString('base64');
    var base64String = "data:".concat(fileMimeType, " ;base64,").concat(base64Data);
    (0, config_1.copyToClipboard)(base64String, lang_1.default.imgTranslateBase64);
};
// const Base64ToImg = (base64Str: string) => {
//   base64Str = process.argv[2];
//   const baseStr = base64Str.replace(/^data:image\/\w+;base64,/, '');
//   const imgName = getBase64ImgType(base64Str);
//   fs.writeFileSync(`base${Date.now()}${imgName}`, baseStr, 'base64');
// };
exports.default = (function (val, cmd) {
    var keys = Object.keys(cmd);
    var length = keys.length;
    if (length !== 1) {
        console.error(lang_1.default.optionError);
        return;
    }
    var type = keys[0];
    // 图片转base64
    if (type === 'imgtobase64') {
        imgToBase64(val);
    }
});
//# sourceMappingURL=index.js.map