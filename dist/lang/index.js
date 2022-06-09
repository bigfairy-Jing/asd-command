"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageType = exports.moneysLangData = exports.langFormatData = exports.langFormat = exports.langData = exports.langList = exports.LangType = void 0;
var package_json_1 = require("../package.json");
var package_json_2 = __importDefault(require("../package.json"));
var _packgeJson = JSON.parse(JSON.stringify(package_json_2.default));
var language = (_packgeJson === null || _packgeJson === void 0 ? void 0 : _packgeJson.language) || 'cn';
var LangType;
(function (LangType) {
    LangType["CN"] = "cn";
    LangType["EN"] = "en";
})(LangType = exports.LangType || (exports.LangType = {}));
exports.langList = [{ name: '简体中文' }, { name: 'English' }];
exports.langData = {
    cn: {
        creating: '生成中',
        createSuccess: '生成成功',
        languageChange: '语言切换',
        successDL: "\u606D\u559C\u60A8\uFF01".concat(package_json_1.name, " V").concat(package_json_1.version, " \u4E0B\u8F7D\u6210\u529F!"),
        // 翻译
        translate: '中英互译',
        translating: '努力翻译中......',
        translateError: '翻译错误!',
        translateSuccess: '翻译成功!',
        // 天气
        weather: '天气查询',
        weathering: '天气查询中......',
        selectRandom: '随机选择',
        // search
        searchDesc: '快捷搜索',
        // openBrowser
        openBrowser: '打开浏览器',
        // create any
        createAny: '生成数字等',
        // options Error
        optionError: 'option - 配置项仅能输入一个, 请输入-help查看',
        optionError2: 'option - 配置项输入有误, 请输入-help查看',
        // inputNeedNumber
        inputNeedNumber: '指令值需要为数字类型',
        translateTimeError: '时间戳转换失败',
        // 颜色转换
        colorTranslate: '颜色转换 16进制转 RGB && RGB 转换16进制',
        // 颜色输入错误
        colorInputErr: '颜色输入错误, 请输入16进制颜色或者rgb(a)值',
        // 传入需要为img类型
        showInputImgFile: '传入值需要为img类型',
        inputImgMaxSize: '图片转换为base64最大为10MB',
        imageSaveSuccess: '图片保存成功',
        imageSaveFail: '图片保存失败请检查传入链接',
        imgTranslate: '图片转换',
        imgTranslateBase64: '图片转换base64成功, 已复制到粘贴板',
        // 传入图片类型错误
        imgUrlError: '传入图片url有误',
        imgSave: '图片链接保存本地',
        linkToqrCodeTo: '链接保存为二维码',
        imgCompress: '图片压缩',
        imgCompression: '🚗图片压缩中',
        imgFileIputErr: '文件传入类型错误,为非图片类型',
        imgInputPathErr: '输入路径有误，非图片类型或包含图片文件夹',
        imgCompressSuccess: '图片压缩成功',
        moneyTranslate: '货币转换',
        moneyFromCountryTips: '请选择要转换的货币从属国家 - 从',
        moneyToCountryTips: '请选择要转换到的货币从属国家 - 至',
        moneyFromCurrnecyTips: '请选择要转换的货币 - 从',
        moneyToCurrnecyTips: '请选择要转换至的货币 - 至',
        moneyInputNumber: '请输入转换的金额',
        moneyCodeErr: '输入货币编码不支持, 请使用-l 或 --ls 查看所有支持的编码',
        copy: '多角度复制文案',
        secondParamErr: '第二项参数传入有误',
        copySuccess: '内容已复制到粘贴板',
        showImgInfo: '展示图片信息',
        successSelectCopy: '选择内容已复制到粘贴板',
        today: '今天',
        tomorrow: '明天',
        afterTomorrow: '后天',
        threeDaysFromNow: '大后天',
        languageChangeSuccess: '切换语言成功',
        showSelectLanguage: '您当前选择的语言是简体中文',
        weatherCodeNotFind: '天气code码未查询到',
        moneyExchangeGetting: '汇率查询中...',
        moneyExchangeGetSuccess: '汇率查询成功...',
        moneyExchangeGetError: '汇率查询失败...',
    },
    en: {
        creating: 'In production',
        createSuccess: 'create success',
        languageChange: 'Language switching',
        successDL: "congratulations! ".concat(package_json_1.name, " V").concat(package_json_1.version, " download successfully!"),
        translate: 'Chinese<>English translate',
        translating: 'In translation......',
        translateError: 'translation error!',
        translateSuccess: 'Translation successful!',
        // 天气
        weather: 'Weather query',
        weathering: 'Weather query in progress......',
        selectRandom: 'Random selection',
        // search
        searchDesc: 'Quick search',
        // openBrowser
        openBrowser: 'Open browser',
        // create any
        createAny: 'Generate numbers, etc',
        // options Error
        optionError: 'option - Only one configuration item can be entered. Please enter -help to view it',
        optionError2: 'option - Configuration item input error, please enter -help to view',
        // inputNeedNumber
        inputNeedNumber: 'Command value needs to be of numeric type',
        translateTimeError: 'Timestamp conversion failed',
        // 颜色转换
        colorTranslate: 'Color conversion hex to RGB &amp; &amp; RGB conversion hex',
        // 颜色输入错误
        colorInputErr: 'Color input error, please input hex color or RGB(a) value',
        // 传入需要为img类型
        showInputImgFile: 'The incoming value needs to be of type img',
        inputImgMaxSize: 'Image conversion to Base64 up to 10MB',
        imageSaveSuccess: 'Picture saved successfully',
        imageSaveFail: 'Failed to save the picture. Please check the incoming link',
        imgTranslate: 'Picture conversion',
        imgTranslateBase64: 'Picture conversion Base64 succeeded, copied to pasteboard',
        // 传入图片类型错误
        imgUrlError: 'Error in incoming picture URL',
        imgSave: 'Picture links saved locally',
        linkToqrCodeTo: 'Save Link as QR code',
        imgCompress: 'Picture compression',
        imgCompression: '🚗The picture is being compressed',
        imgFileIputErr: 'File incoming type error, non picture type',
        imgInputPathErr: 'The input path is incorrect. It is not a picture type or contains a picture folder',
        imgCompressSuccess: 'Picture compression succeeded',
        moneyTranslate: 'Currency conversion',
        moneyFromCountryTips: 'Please select a currency dependent country to convert - from',
        moneyToCountryTips: 'Please select the currency dependent country to convert to - to',
        moneyFromCurrnecyTips: 'Please select the currency to convert - from',
        moneyToCurrnecyTips: 'Please select the currency to convert to - to',
        moneyInputNumber: 'Please enter the converted amount',
        moneyCodeErr: 'The input currency code is not supported. Please use -l or --ls to view all supported codes',
        copy: 'Multi angle copy',
        secondParamErr: 'Error in the second parameter',
        copySuccess: 'Content copied to pasteboard',
        showImgInfo: 'Display picture information',
        successSelectCopy: 'Selection copied to pasteboard',
        today: 'today',
        tomorrow: 'tomorrow',
        afterTomorrow: 'the day after tomorrow',
        threeDaysFromNow: 'three days from now',
        languageChangeSuccess: 'Switching language succeeded',
        showSelectLanguage: 'The language you currently select is English',
        weatherCodeNotFind: 'The weather code was not found',
        moneyExchangeGetting: 'Exchange rate inquiry',
        moneyExchangeGetSuccess: 'Exchange rate query successful',
        moneyExchangeGetError: 'Exchange rate query failed',
    },
};
exports.langFormat = {
    cn: {
        vaildVersion: function (name, nodeVersion) {
            return "\u60A8\u5F53\u524D\u7684Node\u7248\u672C\u4E3A".concat(process.version, ", \u4F46\u662F ").concat(name, " \u9700\u8981Node\u7248\u672C").concat(nodeVersion, ", \u8BF7\u5347\u7EA7\u60A8\u7CFB\u7EDF\u7684node\u7248\u672C");
        },
        getArgsErr: function (name, len) {
            return "\u5F53\u524D\u547D\u4EE4".concat(name, ", \u6700\u591A\u652F\u6301").concat(len, "\u4E2A\u53C2\u6570\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u65B0\u8F93\u5165\u547D\u4EE4\uFF01");
        },
        showNowWeather: function (city, weather, winddirection, windpower, temperature, humidity, reporttime) {
            return "\n        ".concat(city, "\u5929\u6C14\u5B9E\u65F6\u64AD\u62A5\uFF1A\n        \u5929\u6C14: ").concat(weather, "\n        \u98CE\u5411: ").concat(winddirection, "\n        \u98CE\u529B\u7B49\u7EA7: ").concat(windpower, "\n        \u5BA4\u5916\u6E29\u5EA6\uFF1A").concat(temperature, "\n        \u7A7A\u6C14\u6E7F\u5EA6\uFF1A").concat(humidity, "%\n        \u5B9E\u51B5\u6570\u636E\u53D1\u5E03\u65F6\u95F4\uFF1A").concat(reporttime, "\n      ");
        },
        showFeatureWeatherDesc: function (city, reporttime) {
            return "".concat(city, " ").concat(reporttime, " \u5929\u6C14\u64AD\u62A5\n      ");
        },
        showFeatureWeathre: function (dayweather, nightweather, daytemp, nighttemp, daywind, nightwind, daypower, nightpower) {
            return "\n        \u767D\u5929---->\u5929\u6C14: ".concat(dayweather, "; \u6E29\u5EA6: ").concat(daytemp, "; \u98CE\u5411: ").concat(daywind, "; \u98CE\u529B: ").concat(daypower, ";\n        \u665A\u4E0A---->\u5929\u6C14: ").concat(nightweather, "; \u6E29\u5EA6: ").concat(nighttemp, "; \u98CE\u5411: ").concat(nightwind, "; \u98CE\u529B: ").concat(nightpower, ";");
        },
        getShowCompressRe: function (successNum, errNum) {
            return "\u56FE\u7247\u538B\u7F29\u5B8C\u6BD5! \u5176\u538B\u7F29\u6210\u529F".concat(successNum, "\u4E2A, \u538B\u7F29\u5931\u8D25").concat(errNum, "\u4E2A ");
        },
        showMoneyInfo: function (rate, update, val, result) {
            return "\n        ".concat(val, " x ").concat(rate, " = ").concat(result, "\n        \u5F53\u524D\u8F6C\u6362\u6C47\u7387\u4E3A ").concat(rate, "\n        \u6C47\u7387\u66F4\u65B0\u65F6\u95F4\u4E3A ").concat(update, "\n      ");
        },
        getShowImgInfo: function (imgSize, width, height, type) {
            return "\n        \u56FE\u7247\u5927\u5C0F: ".concat(imgSize, "\n        \u56FE\u7247\u5BBD: ").concat(width, "\u50CF\u7D20\n        \u56FE\u7247\u9AD8: ").concat(height, "\u50CF\u7D20\n        \u56FE\u7247\u7C7B\u578B: ").concat(type, "\n      ");
        },
        getEditWeatherCodeSuccess: function (address) {
            return "\u7CFB\u7EDF\u8BBE\u7F6E\u5730\u5740\u4E3A ".concat(address, " \u6210\u529F!");
        },
    },
    en: {
        vaildVersion: function (name, nodeVersion) {
            return "Your current node version is ".concat(process.version, ", but ").concat(name, " requires node version ").concat(nodeVersion, ". Please upgrade your local Node");
        },
        getArgsErr: function (name, len) {
            return "The current command ".concat(name, " supports ").concat(len, " parameters at most. Please check and re-enter the command!");
        },
        showNowWeather: function (city, weather, winddirection, windpower, temperature, humidity, reporttime) {
            return "\n        ".concat(city, " weather real-time broadcast:\n        Weather: ").concat(weather, "\n        Wind direction: ").concat(winddirection, "\n        Wind grade: ").concat(windpower, "\n        Outdoor temperature: ").concat(temperature, "\n        Air humidity: ").concat(humidity, "%\n        Live data release time: ").concat(reporttime, "\n      ");
        },
        showFeatureWeatherDesc: function (city, reporttime) {
            return "".concat(city, " ").concat(reporttime, " weather broadcast\n      ");
        },
        showFeatureWeathre: function (dayweather, nightweather, daytemp, nighttemp, daywind, nightwind, daypower, nightpower) {
            return "\n        daytime---->weather: ".concat(dayweather, "; temperature: ").concat(daytemp, "; wind direction: ").concat(daywind, "; wind power: ").concat(daypower, ";\n        night---->weather: ").concat(nightweather, "; temperature: ").concat(nighttemp, "; wind direction: ").concat(nightwind, "; wind power: ").concat(nightpower, ";");
        },
        getShowCompressRe: function (successNum, errNum) {
            return "Image compression completed! Its compression succeeded in ".concat(successNum, " and failed in ").concat(errNum);
        },
        showMoneyInfo: function (rate, update, val, result) {
            return "\n        ".concat(val, " x ").concat(rate, " = ").concat(result, "\n        Current conversion exchange rate is ").concat(rate, "\n        Exchange rate updated on ").concat(update, "\n      ");
        },
        getShowImgInfo: function (imgSize, width, height, type) {
            return "\n        Picture size: ".concat(imgSize, "\n        Picture width: ").concat(width, "pixel\n        Picture height: ").concat(height, "pixel\n        Picture type: ").concat(type, "\n      ");
        },
        getEditWeatherCodeSuccess: function (address) {
            return "System address set ".concat(address, " successfully");
        },
    },
};
exports.langFormatData = exports.langFormat[language];
exports.moneysLangData = {
    cn: {
        cn: '国家',
        currency_code: '货币代码',
        currency_cn: '货币名称',
    },
    en: {
        en: 'country',
        currency_code: 'currency code',
        currency_en: 'currency name',
    },
}[language];
exports.languageType = language;
exports.default = exports.langData[language];
// 测试代码,中英文是否完全相同
// const langData1 = langData;
// const langFormatData1 = langFormat;
// const x1 = Object.keys(langData1.cn).join(',');
// const x2 = Object.keys(langData1.en).join(',');
// const y1 = Object.keys(langFormatData1.cn).join(',');
// const y2 = Object.keys(langFormatData1.en).join(',');
// console.log(x1, `\n`, x2);
// console.log(x1 === x2);
// console.log(y1, `\n`, y2);
// console.log(y1 === y2);
//# sourceMappingURL=index.js.map