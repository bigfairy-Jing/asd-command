"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var tinify_1 = __importDefault(require("tinify"));
var path_1 = __importDefault(require("path"));
// import images from 'images';
// import imagemin from 'imagemin';
// import imageminMozjepg from 'imagemin-mozjpeg';
// import imageminPngquant from 'imagemin-pngquant';
var utils_1 = require("../../lib/utils");
var reg_1 = __importDefault(require("../../lib/reg"));
var data_1 = __importDefault(require("./data"));
var lang_1 = __importStar(require("../../lang"));
var spinner_1 = __importDefault(require("../../lib/spinner"));
// 使用PQueue 批量压缩
// PQueue
//  Imagemin
// “imagemin”: “^7.0.1”,
// “imagemin-mozjpeg”: “^8.0.0”,
// “imagemin-pngquant”: “^8.0.0”,
// 暂时弃用该API,之后找到更多的方式优化
// const compressImgmin = async (inPath: string, toPath: string) => {
//   return new Promise<void>((resolve, reject) => {
//     imagemin([inPath], {
//       plugins: [
//         imageminMozjepg({ quality: 70 }),
//         imageminPngquant({
//           quality: [0.6, 0.8],
//         }),
//       ],
//     })
//       .then(res => {
//         fs.writeFile(toPath, res[0].data, 'binary', err => {
//           if (err) reject();
//           else resolve();
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         reject();
//       });
//   });
// };
var compressByTinify = function (inPath, toPath) { return __awaiter(void 0, void 0, void 0, function () {
    var source;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tinify_1.default.key = data_1.default;
                source = tinify_1.default.fromFile(inPath);
                return [4 /*yield*/, source.toFile(toPath)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// 以下仅仅支持jpg 弃用, 暂时放在此处
// const compressByNodeImages = (str: string, quality:number = 75) => {
//   str = process.argv[2];
//   const fileName = `${Date.now()}.png`;
//   console.log(str, fileName)
//   images(str).save(fileName, {
//     quality
//   })
// };
// const compress = (str, type) => {
//   const isImgFile = isPathType(str) === PathTypeEnum.FILE && Regs.img.val.test(str);
//   if(!isImgFile) return
// }
var formatDir = function (inPath, toPath, tempFiles) {
    if (tempFiles === void 0) { tempFiles = []; }
    var files = fs_1.default.readdirSync(inPath);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filePath = "".concat(inPath, "/").concat(file);
        var toFilePath = "".concat(toPath, "/").concat(file);
        if ((0, utils_1.isPathType)(filePath) === utils_1.PathTypeEnum.DIRECTORY) {
            formatDir(filePath, toFilePath, tempFiles);
        }
        else {
            if (reg_1.default.img.val.test(file)) {
                // 判断输入是否有权限
                try {
                    fs_1.default.accessSync(toPath);
                    tempFiles.push({
                        fromFile: filePath,
                        toFile: toFilePath,
                    });
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    }
    return tempFiles;
};
exports.default = (function (inPath, toPath, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var pathType, keys, type, compressFn, error_1, fileCompressArr, compreRes, successNum_1, errNum_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pathType = (0, utils_1.isPathType)(inPath);
                keys = Object.keys(cmd);
                type = ['tinypng'].includes(keys[0]) ? keys[0] : 'tinypng';
                compressFn = {
                    tinypng: compressByTinify,
                    // nodeimages: compressImgmin,
                }[type];
                if (!(pathType === utils_1.PathTypeEnum.FILE)) return [3 /*break*/, 4];
                if (!reg_1.default.img.val.test(inPath)) {
                    (0, utils_1.consoleErr)(lang_1.default.imgFileIputErr);
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                fs_1.default.accessSync(toPath);
                spinner_1.default.log(lang_1.default.imgCompression);
                return [4 /*yield*/, compressFn(inPath, "".concat(toPath, "/").concat(path_1.default.basename(inPath)))];
            case 2:
                _a.sent();
                spinner_1.default.success(lang_1.default.imgCompressSuccess);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                process.exit(12);
                return [3 /*break*/, 4];
            case 4:
                if (!(pathType === utils_1.PathTypeEnum.DIRECTORY)) return [3 /*break*/, 8];
                fileCompressArr = formatDir(inPath, toPath);
                if (fileCompressArr.length === 0) {
                    (0, utils_1.consoleErr)(lang_1.default.imgInputPathErr);
                    return [2 /*return*/];
                }
                _a.label = 5;
            case 5:
                _a.trys.push([5, 7, , 8]);
                spinner_1.default.log(lang_1.default.imgCompression);
                return [4 /*yield*/, Promise.allSettled(fileCompressArr.map(function (_a) {
                        var fromFile = _a.fromFile, toFile = _a.toFile;
                        return compressFn(fromFile, toFile);
                    }))];
            case 6:
                compreRes = _a.sent();
                successNum_1 = 0;
                errNum_1 = 0;
                compreRes.forEach(function (comreItem) {
                    if (comreItem.status === 'fulfilled')
                        successNum_1++;
                    else
                        errNum_1++;
                });
                spinner_1.default.success(lang_1.langFormatData.getShowCompressRe(successNum_1, errNum_1));
                return [3 /*break*/, 8];
            case 7:
                error_2 = _a.sent();
                console.log(error_2);
                spinner_1.default.stop();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map