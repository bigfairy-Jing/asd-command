"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var fetch_1 = __importDefault(require("../../lib/fetch"));
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
var urlToBase64 = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, res, base64String;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch_1.default.get(url.replace(/\\/g, ''))];
            case 1:
                _a = (_b.sent()), code = _a.code, res = _a.res;
                if (code !== 0) {
                    console.error(lang_1.default.imgUrlError);
                    return [2 /*return*/];
                }
                base64String = "data:image/png;base64,".concat(Buffer.from(res.rawBody).toString('base64'));
                (0, config_1.copyToClipboard)(base64String, lang_1.default.imgTranslateBase64);
                return [2 /*return*/];
        }
    });
}); };
exports.default = (function (val, cmd) {
    var keys = Object.keys(cmd);
    var length = keys.length;
    if (length !== 1) {
        (0, utils_1.consoleErr)(lang_1.default.optionError);
        return;
    }
    var type = keys[0];
    // 图片转base64
    if (type === 'imgtobase64') {
        imgToBase64(val);
    }
    else {
        urlToBase64(val);
    }
});
//# sourceMappingURL=index.js.map