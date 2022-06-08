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
exports.inputByMoney = exports.selectByMoney = exports.requestMoneyExchange = exports.getRequestMoneyUrl = exports.showCodeTable = exports.getShowArr = void 0;
var lang_1 = __importStar(require("../../lang"));
var data_1 = require("./data");
var inquirer_1 = __importDefault(require("inquirer"));
var dayjs_1 = __importDefault(require("dayjs"));
var fetch_1 = __importDefault(require("../../lib/fetch"));
var utils_1 = require("../../lib/utils");
var getShowArr = function (type) {
    return type === 'country' ? data_1.moneysCountryArr : data_1.moneysCurrencyArr;
};
exports.getShowArr = getShowArr;
var showCodeTable = function (type) {
    if (type === void 0) { type = 'country'; }
    var showArr = (0, exports.getShowArr)(type);
    var _a = [Object.keys(lang_1.moneysLangData), Object.values(lang_1.moneysLangData)], moneyKeys = _a[0], moneyKeyLabels = _a[1];
    console.table(showArr.map(function (item) {
        var _a;
        var re = (_a = {},
            _a[moneyKeyLabels[0]] = item[moneyKeys[0]],
            _a[moneyKeyLabels[1]] = item[moneyKeys[1]],
            _a[moneyKeyLabels[2]] = item[moneyKeys[2]],
            _a);
        if (type !== 'country')
            delete re[moneyKeyLabels[0]];
        return re;
    }));
};
exports.showCodeTable = showCodeTable;
var getRequestMoneyUrl = function (currencyCode) {
    return "https://v6.exchangerate-api.com/v6/".concat(data_1.ExchangeRateKey, "/latest/").concat(currencyCode);
};
exports.getRequestMoneyUrl = getRequestMoneyUrl;
var requestMoneyExchange = function (currencyCode, toCode) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, code, res, result, time_last_update_unix, conversion_rates, errorType;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch_1.default.get((0, exports.getRequestMoneyUrl)(currencyCode), true)];
            case 1:
                _a = _b.sent(), code = _a.code, res = _a.res;
                result = res.result, time_last_update_unix = res.time_last_update_unix, conversion_rates = res.conversion_rates, errorType = res["error-type"];
                if (code !== 0 || result !== 'success') {
                    console.error(errorType || '获取转换汇率失败！');
                    return [2 /*return*/, {
                            success: false,
                        }];
                }
                return [2 /*return*/, {
                        success: true,
                        rate: conversion_rates[toCode],
                        update: dayjs_1.default.unix(time_last_update_unix).format('YYYY-MM-DD HH:mm:ss'),
                    }];
        }
    });
}); };
exports.requestMoneyExchange = requestMoneyExchange;
var selectByMoney = function (type) { return __awaiter(void 0, void 0, void 0, function () {
    var typeMap;
    return __generator(this, function (_a) {
        typeMap = {
            country: {
                fromMessage: lang_1.default.moneyFromCountryTips,
                toMessage: lang_1.default.moneyToCountryTips,
                prefix: lang_1.languageType,
            },
            currency: {
                fromMessage: lang_1.default.moneyFromCurrnecyTips,
                toMessage: lang_1.default.moneyToCurrnecyTips,
                prefix: "currency_".concat(lang_1.languageType),
            },
        };
        inquirer_1.default
            .prompt([
            {
                type: 'list',
                name: 'selectFrom',
                message: typeMap[type].fromMessage,
                choices: (0, exports.getShowArr)(type).map(function (item) { return "".concat(item[typeMap[type].prefix], "---> ").concat(item.currency_code); }),
                filter: function (val) {
                    return val.split('---> ')[1];
                },
                loop: false,
            },
            {
                type: 'list',
                name: 'selectTo',
                message: typeMap[type].toMessage,
                choices: (0, exports.getShowArr)(type).map(function (item) { return "".concat(item[typeMap[type].prefix], "---> ").concat(item.currency_code); }),
                filter: function (val) {
                    return val.split('---> ')[1];
                },
                loop: false,
            },
            {
                type: 'number',
                name: 'inputMoney',
                message: lang_1.default.moneyInputNumber,
            },
        ])
            .then(function (answers) { return __awaiter(void 0, void 0, void 0, function () {
            var selectFrom, selectTo, inputMoney, _a, success, rate, update;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        selectFrom = answers.selectFrom, selectTo = answers.selectTo, inputMoney = answers.inputMoney;
                        return [4 /*yield*/, (0, exports.requestMoneyExchange)(selectFrom, selectTo)];
                    case 1:
                        _a = _b.sent(), success = _a.success, rate = _a.rate, update = _a.update;
                        if (success) {
                            console.log(lang_1.langFormatData.showMoneyInfo(rate, update, inputMoney, (0, utils_1.mul)(inputMoney, rate)));
                        }
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) { return console.error(err); });
        return [2 /*return*/];
    });
}); };
exports.selectByMoney = selectByMoney;
var inputByMoney = function (dbCode) { return __awaiter(void 0, void 0, void 0, function () {
    var codeArr;
    return __generator(this, function (_a) {
        codeArr = dbCode.split('-');
        if (codeArr.length !== 2) {
            console.error(lang_1.default.optionError2);
            return [2 /*return*/];
        }
        if (!data_1.supportCurrencys.includes(codeArr[0]) || !data_1.supportCurrencys.includes(codeArr[1])) {
            console.error(lang_1.default.moneyCodeErr);
            return [2 /*return*/];
        }
        inquirer_1.default
            .prompt([
            {
                type: 'number',
                name: 'inputMoney',
                message: lang_1.default.moneyInputNumber,
            },
        ])
            .then(function (answers) { return __awaiter(void 0, void 0, void 0, function () {
            var inputMoney, _a, success, rate, update;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        inputMoney = answers.inputMoney;
                        return [4 /*yield*/, (0, exports.requestMoneyExchange)(codeArr[0], codeArr[1])];
                    case 1:
                        _a = _b.sent(), success = _a.success, rate = _a.rate, update = _a.update;
                        if (success) {
                            console.log(lang_1.langFormatData.showMoneyInfo(rate, update, inputMoney, (0, utils_1.mul)(inputMoney, rate)));
                        }
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) { return console.error(err); });
        return [2 /*return*/];
    });
}); };
exports.inputByMoney = inputByMoney;
//# sourceMappingURL=config.js.map