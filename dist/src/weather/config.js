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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printWeather = exports.getWeatherAPI = void 0;
var chalk_1 = __importDefault(require("chalk"));
var lang_1 = __importStar(require("../../lang"));
var getWeatherAPI = function (type, city) {
    var WEATHERKEY = process.env.WEATHERKEY;
    return "https://restapi.amap.com/v3/weather/weatherInfo?key=".concat('4e40543244f03b9a58ca5c4f0f73d455', "&extensions=").concat(type, "&output=JSON&city=").concat(city);
};
exports.getWeatherAPI = getWeatherAPI;
var printWeather = function (type, res) {
    // 当前实时天气
    if (type === 'base') {
        var now = res.lives[0];
        var city_1 = now.city, weather = now.weather, winddirection = now.winddirection, windpower = now.windpower, temperature = now.temperature, reporttime_1 = now.reporttime, humidity = now.humidity;
        console.log(chalk_1.default.blue(lang_1.langFormatData.showNowWeather(city_1, weather, winddirection, windpower, temperature, humidity, reporttime_1)));
        return;
    }
    // 今日和未来天气;
    var forecasts = res.forecasts;
    var _a = forecasts[0], reporttime = _a.reporttime, city = _a.city, casts = _a.casts;
    var nameMap = {
        '0': lang_1.default.today,
        '1': lang_1.default.tomorrow,
        '2': lang_1.default.afterTomorrow,
        '3': lang_1.default.threeDaysFromNow,
    };
    var showstr = casts
        .map(function (cast, index) {
        var dayweather = cast.dayweather, nightweather = cast.nightweather, daytemp = cast.daytemp, nighttemp = cast.nighttemp, daywind = cast.daywind, nightwind = cast.nightwind, daypower = cast.daypower, nightpower = cast.nightpower;
        // @ts-ignore
        var name = nameMap["".concat(index)];
        var detail = lang_1.langFormatData.showFeatureWeathre(dayweather, nightweather, daytemp, nighttemp, daywind, nightwind, daypower, nightpower);
        return "\n".concat(chalk_1.default.red(name), "\n").concat(detail, "\n    ");
    })
        .reduce(function (str, now) { return str + now; });
    console.log(chalk_1.default.blue("".concat(lang_1.langFormatData.showFeatureWeatherDesc(city, reporttime)).concat(showstr)));
};
exports.printWeather = printWeather;
//# sourceMappingURL=config.js.map