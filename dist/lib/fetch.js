"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var got_1 = __importDefault(require("got"));
// GET, HEAD, POST, PUT, DELETE.
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["head"] = "HEAD";
    HttpMethod["delete"] = "DELETE";
    HttpMethod["options"] = "OPTIONS";
    HttpMethod["trace"] = "TRACE";
})(HttpMethod || (HttpMethod = {}));
var GotFetch = /** @class */ (function () {
    function GotFetch() {
    }
    GotFetch.initOptions = function (options, method, headers) {
        if (options === void 0) { options = {}; }
        if (headers === void 0) { headers = {}; }
        return __assign(__assign({}, options), { method: method, headers: __assign({}, headers) });
    };
    GotFetch.post = function (url, body, ParamOptions, headers) {
        if (ParamOptions === void 0) { ParamOptions = {}; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var options, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.initOptions(ParamOptions, HttpMethod.post, headers);
                        options.form = body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, options)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, {
                                code: 0,
                                statusCode: res.statusCode,
                                statusMessage: res.statusMessage,
                                body: res.body,
                                response: res.body,
                            }];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, {
                                code: -1,
                                error: error_1,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GotFetch.jsonPost = function (url, body, ParamOptions, headers) {
        if (ParamOptions === void 0) { ParamOptions = {}; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var options, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.initOptions(ParamOptions, HttpMethod.post, headers);
                        options.json = body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, options)];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, {
                                code: 0,
                                statusCode: res.statusCode,
                                statusMessage: res.statusMessage,
                                body: res.body,
                                response: res.body,
                            }];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, {
                                code: -1,
                                error: error_2,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GotFetch.get = function (url, isJson) {
        if (isJson === void 0) { isJson = false; }
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        if (!isJson) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, got_1.default)(url).json()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (0, got_1.default)(url)];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        res = _a;
                        // 这里可能涉及不同的接口，所以这里把处理方式放到对应的command
                        return [2 /*return*/, {
                                code: 0,
                                res: res,
                            }];
                    case 5:
                        error_3 = _b.sent();
                        return [2 /*return*/, {
                                code: -1,
                                error: error_3,
                            }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return GotFetch;
}());
exports.default = GotFetch;
//# sourceMappingURL=fetch.js.map