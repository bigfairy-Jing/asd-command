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
var inquirer_1 = __importDefault(require("inquirer"));
var package_json_1 = __importDefault(require("../../package.json"));
var fs_1 = __importDefault(require("fs"));
var lang_1 = __importStar(require("../../lang"));
var utils_1 = require("../../lib/utils");
var path_1 = __importDefault(require("path"));
var _packgeJson = JSON.parse(JSON.stringify(package_json_1.default));
var writePackageLanguage = function (language) {
    _packgeJson.language = language;
    var str = JSON.stringify(_packgeJson);
    try {
        var packagePath = path_1.default.resolve(__dirname, '../../package.json');
        fs_1.default.writeFileSync(packagePath, str);
        (0, utils_1.consoleSuccess)(lang_1.langData[language].languageChangeSuccess);
        (0, utils_1.consoleSuccess)(lang_1.langData[language].showSelectLanguage);
    }
    catch (error) {
        console.log(error);
    }
};
var selectLang = function () { return __awaiter(void 0, void 0, void 0, function () {
    var questions, language;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                questions = [
                    {
                        name: 'language',
                        type: 'list',
                        message: '您需要选择的语言是?(please choose the language that you need)',
                        choices: ['简体中文(Chinese)', '英文(English)'],
                        filter: function (val) {
                            return val === '英文(English)' ? 'en' : 'cn';
                        },
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(questions)];
            case 1:
                language = (_a.sent()).language;
                writePackageLanguage(language);
                return [2 /*return*/];
        }
    });
}); };
var showLangList = function () {
    (0, utils_1.consoleSuccess)("\n".concat(lang_1.langList.map(function (x) { return x.name; }).join("\n")));
};
exports.default = (function (cmd) {
    var keys = Object.keys(cmd);
    var length = keys.length;
    if (length === 0) {
        (0, utils_1.consoleSuccess)(lang_1.default.showSelectLanguage);
        return;
    }
    if (length !== 1) {
        (0, utils_1.consoleErr)(lang_1.default.optionError);
        return;
    }
    var type = keys[0];
    switch (type) {
        case 'ls':
            showLangList();
            break;
        case 'select':
            selectLang();
            break;
    }
});
//# sourceMappingURL=index.js.map