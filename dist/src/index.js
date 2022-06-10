#!/usr/bin/env node
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
var utils_1 = require("../lib/utils");
// @ 1检测NODE版本是否合格
if (!(0, utils_1.validNodeVersion)()) {
    process.exit(1);
}
var commander_1 = require("commander");
var index_1 = __importDefault(require("../lang/index"));
var package_json_1 = require("../package.json");
// @3 命令行书写
var program = new commander_1.Command();
program.version("".concat(package_json_1.name, " ").concat(package_json_1.version)).usage('<command> [options]');
program.option('-V --version', "".concat(package_json_1.name, " ").concat(package_json_1.version));
// $1 翻译
program
    .command('fy <word>')
    .description(index_1.default.translate)
    .action(function (val) { return __awaiter(void 0, void 0, void 0, function () {
    var translate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('fy');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./translate')); })];
            case 1:
                translate = _a.sent();
                translate.default(val);
                return [2 /*return*/];
        }
    });
}); });
program
    .command('translate <word>')
    .description(index_1.default.translate)
    .action(function (val) { return __awaiter(void 0, void 0, void 0, function () {
    var translate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('translate');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./translate')); })];
            case 1:
                translate = _a.sent();
                translate.default(val);
                return [2 /*return*/];
        }
    });
}); });
// $2 天气
program
    .command('tq [code]')
    .description(index_1.default.weather)
    .option('-b --base', 'current weather')
    .option('-a --all', 'Weather Forecast')
    .option('-fc --findcode', 'find address code')
    .option('-ss --setsystem', 'set system weather code')
    .action(function (code, opt) { return __awaiter(void 0, void 0, void 0, function () {
    var weather;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('tq');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./weather')); })];
            case 1:
                weather = _a.sent();
                weather.default(code, opt);
                return [2 /*return*/];
        }
    });
}); });
program
    .command('weather [text]')
    .description(index_1.default.weather)
    .option('-b --base', 'current weather')
    .option('-a --all', 'Weather Forecast')
    .option('-fc --findcode', 'find address code')
    .option('-ss --setsystem', 'set system weather code')
    .action(function (text, opt) { return __awaiter(void 0, void 0, void 0, function () {
    var weather;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('tq');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./weather')); })];
            case 1:
                weather = _a.sent();
                weather.default(text, opt);
                return [2 /*return*/];
        }
    });
}); });
// $3 随机选择
program
    .command('select <word>')
    .description(index_1.default.selectRandom)
    .action(function (val) { return __awaiter(void 0, void 0, void 0, function () {
    var randomSelect;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('select');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./randomSelect')); })];
            case 1:
                randomSelect = _a.sent();
                randomSelect.default(val);
                return [2 /*return*/];
        }
    });
}); });
// $4 搜索跳转
program
    .command('search <word>')
    .option('-n, --npm', 'search by npm')
    .option('-b, --baidu', 'search by baidu')
    .option('-t, --github', 'search by github')
    .option('-g, --google', 'search by google')
    .option('-j, --juejin', 'search by juejin')
    .option('-z, --zhihu', 'search by zhihu')
    .option('-a, --all', 'search by all set')
    .description(index_1.default.searchDesc)
    .action(function (val, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var search;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('search');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./search')); })];
            case 1:
                search = _a.sent();
                search.default(val, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $5 打开url
program
    .command('open <link>')
    .description(index_1.default.openBrowser)
    .action(function (link) { return __awaiter(void 0, void 0, void 0, function () {
    var openBrowser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('open');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./openBrowser')); })];
            case 1:
                openBrowser = _a.sent();
                openBrowser.default(link);
                return [2 /*return*/];
        }
    });
}); });
// $6 生成数字 随机数 唯一ID 时间戳 指定长度随机字母 随机手机号 随机姓名 随机身份证 随机颜色
program
    .command('cs [optStr]')
    .option('-r, --random', 'num of random')
    .option('-id, --uniqueid', 'num of unique id')
    .option('-tt, --timestamp', 'num of timestamp')
    .option('-rl, --randomletter', 'random letter')
    .option('-rp, --randomphone', 'random phone number')
    .option('-rh, --randomhue', 'random color')
    .description(index_1.default.createAny)
    .action(function (val, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var creaetSome;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('cs');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./createSome')); })];
            case 1:
                creaetSome = _a.sent();
                creaetSome.default(val, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $7 颜色转换
program
    .command('cc <color>')
    .description(index_1.default.colorTranslate)
    .action(function (color) { return __awaiter(void 0, void 0, void 0, function () {
    var colorTranslate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('cc');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./colorTranslate')); })];
            case 1:
                colorTranslate = _a.sent();
                colorTranslate.default(color);
                return [2 /*return*/];
        }
    });
}); });
// $8 图片转换 -> base64  base64 -> 图片  url -> base64
program
    .command('imgtl <imgStr>')
    .option('-ib, --imgtobase64', 'img to base64')
    .option('-ub, --urltobase64', 'img link to base64')
    .description(index_1.default.imgTranslate)
    .action(function (val, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var imgTranslate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('imgtl');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./imgTranslate')); })];
            case 1:
                imgTranslate = _a.sent();
                imgTranslate.default(val, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $9 url 图片地址保存
program
    .command('imgsave <imgLink>')
    .description(index_1.default.imageSaveSuccess)
    .action(function (val) { return __awaiter(void 0, void 0, void 0, function () {
    var imgLinkSave;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('imgsave');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./imgLinkSave')); })];
            case 1:
                imgLinkSave = _a.sent();
                imgLinkSave.default(val);
                return [2 /*return*/];
        }
    });
}); });
// $10 图片压缩
program
    .command('imgcp <inPath> <outPath>')
    .option('-tin, --tinypng', 'compress by tinypng')
    .option('-images, --nodeimages', 'compress by npm node-images')
    .description(index_1.default.imgCompress)
    .action(function (pathStr, outPath, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var imgCompress;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('imgcp', 2);
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./imgCompress')); })];
            case 1:
                imgCompress = _a.sent();
                imgCompress.default(pathStr, outPath, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $11 获取图片信息 单个文件 文件夹
program
    .command('imginfo <imgPath>')
    .option('-b, --base', 'Get file picture information')
    .option('-l, --link', 'Get linked picture information')
    .description(index_1.default.showImgInfo)
    .action(function (imgPath, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var imgInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('imginfo');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./imgInfo')); })];
            case 1:
                imgInfo = _a.sent();
                imgInfo.default(imgPath, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $12 链接转为二维码
program
    .command('qrcode <link>')
    .description(index_1.default.linkToqrCodeTo)
    .action(function (link) { return __awaiter(void 0, void 0, void 0, function () {
    var createQrcode;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('qrcode');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./createQrcode')); })];
            case 1:
                createQrcode = _a.sent();
                createQrcode.default(link);
                return [2 /*return*/];
        }
    });
}); });
// $13 货币转换
program
    .command('money [translateStr]')
    .description(index_1.default.moneyTranslate)
    .option('-sct, --selectcountry', 'The currency is converted by selecting the country')
    .option('-scr, --selectcurrency', 'Currency is converted by selecting a currency')
    .option('-showcode, --showcode', 'Show all currency codes')
    .option('-showcodecurrency, --showcurrency', 'Show all currency codes')
    .option('-b, --bycode', 'Currency is converted by code')
    .action(function (translateStr, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var moneyTranslate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('money');
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./moneyTranslate')); })];
            case 1:
                moneyTranslate = _a.sent();
                moneyTranslate.default(translateStr, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $14 终极复制
program
    .command('copy <word> <opt>')
    .description(index_1.default.copy)
    .option('-bn, --bynumber', 'copy by number')
    .option('-be, --byexpre', 'copy by expression')
    .action(function (word, opt, cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var copyUltimate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, utils_1.verifyArgs)('copy', 2);
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./copyUltimate')); })];
            case 1:
                copyUltimate = _a.sent();
                copyUltimate.default(word, opt, cmd);
                return [2 /*return*/];
        }
    });
}); });
// $15 选择中英文
program
    .command('lang')
    .description(index_1.default.languageChange)
    .option('-ls, --ls', 'show language list')
    .option('-select, --select', 'Choose the language you currently need')
    .action(function (cmd) { return __awaiter(void 0, void 0, void 0, function () {
    var languageChange;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./languageChange')); })];
            case 1:
                languageChange = _a.sent();
                languageChange.default(cmd);
                return [2 /*return*/];
        }
    });
}); });
program.parse(process.argv);
//# sourceMappingURL=index.js.map