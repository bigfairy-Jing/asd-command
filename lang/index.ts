import { name, version } from '../package.json';
import packageJson from '../package.json';

const _packgeJson = JSON.parse(JSON.stringify(packageJson));

const language: string = _packgeJson?.language || 'cn';

export enum LangType {
  CN = 'cn',
  EN = 'en',
}

type LangdData = {
  cn: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
};

type LangFormat = {
  cn: {
    [key: string]: (...argv: (string | number)[]) => string;
  };
  en: {
    [key: string]: (...argv: (string | number)[]) => string;
  };
};

type MoneysLangData = {
  cn?: string;
  en?: string;
  currency_code: string;
  currency_cn?: string;
  currency_en?: string;
};

export const langList = [{ name: '简体中文' }, { name: 'English' }];

export const langData: LangdData = {
  cn: {
    creating: '生成中',
    createSuccess: '生成成功',
    languageChange: '语言切换',
    successDL: `恭喜您！${name} V${version} 下载成功!`,
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
    successDL: `congratulations! ${name} V${version} download successfully!`,
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
    optionError:
      'option - Only one configuration item can be entered. Please enter -help to view it',
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
    imgInputPathErr:
      'The input path is incorrect. It is not a picture type or contains a picture folder',
    imgCompressSuccess: 'Picture compression succeeded',
    moneyTranslate: 'Currency conversion',
    moneyFromCountryTips: 'Please select a currency dependent country to convert - from',
    moneyToCountryTips: 'Please select the currency dependent country to convert to - to',
    moneyFromCurrnecyTips: 'Please select the currency to convert - from',
    moneyToCurrnecyTips: 'Please select the currency to convert to - to',
    moneyInputNumber: 'Please enter the converted amount',
    moneyCodeErr:
      'The input currency code is not supported. Please use -l or --ls to view all supported codes',
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

export const langFormat: LangFormat = {
  cn: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `您当前的Node版本为${process.version}, 但是 ${name} 需要Node版本${nodeVersion}, 请升级您系统的node版本`;
    },
    getArgsErr: (name, len) => {
      return `当前命令${name}, 最多支持${len}个参数，请检查后重新输入命令！`;
    },
    showNowWeather(
      city,
      weather,
      winddirection,
      windpower,
      temperature,
      humidity,
      reporttime
    ): string {
      return `
        ${city}天气实时播报：
        天气: ${weather}
        风向: ${winddirection}
        风力等级: ${windpower}
        室外温度：${temperature}
        空气湿度：${humidity}%
        实况数据发布时间：${reporttime}
      `;
    },
    showFeatureWeatherDesc(city, reporttime): string {
      return `${city} ${reporttime} 天气播报
      `;
    },
    showFeatureWeathre(
      dayweather,
      nightweather,
      daytemp,
      nighttemp,
      daywind,
      nightwind,
      daypower,
      nightpower
    ): string {
      return `
        白天---->天气: ${dayweather}; 温度: ${daytemp}; 风向: ${daywind}; 风力: ${daypower};
        晚上---->天气: ${nightweather}; 温度: ${nighttemp}; 风向: ${nightwind}; 风力: ${nightpower};`;
    },
    getShowCompressRe: (successNum, errNum) => {
      return `图片压缩完毕! 其压缩成功${successNum}个, 压缩失败${errNum}个 `;
    },
    showMoneyInfo: (rate, update, val, result): string => {
      return `
        ${val} x ${rate} = ${result}
        当前转换汇率为 ${rate}
        汇率更新时间为 ${update}
      `;
    },
    getShowImgInfo: (imgSize, width, height, type): string => {
      return `
        图片大小: ${imgSize}
        图片宽: ${width}像素
        图片高: ${height}像素
        图片类型: ${type}
      `;
    },
    getEditWeatherCodeSuccess: (address: string): string => {
      return `系统设置地址为 ${address} 成功!`;
    },
  },
  en: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `Your current node version is ${process.version}, but ${name} requires node version ${nodeVersion}. Please upgrade your local Node`;
    },
    getArgsErr: (name, len) => {
      return `The current command ${name} supports ${len} parameters at most. Please check and re-enter the command!`;
    },
    showNowWeather(
      city,
      weather,
      winddirection,
      windpower,
      temperature,
      humidity,
      reporttime
    ): string {
      return `
        ${city} weather real-time broadcast:
        Weather: ${weather}
        Wind direction: ${winddirection}
        Wind grade: ${windpower}
        Outdoor temperature: ${temperature}
        Air humidity: ${humidity}%
        Live data release time: ${reporttime}
      `;
    },
    showFeatureWeatherDesc(city, reporttime): string {
      return `${city} ${reporttime} weather broadcast
      `;
    },
    showFeatureWeathre(
      dayweather,
      nightweather,
      daytemp,
      nighttemp,
      daywind,
      nightwind,
      daypower,
      nightpower
    ): string {
      return `
        daytime---->weather: ${dayweather}; temperature: ${daytemp}; wind direction: ${daywind}; wind power: ${daypower};
        night---->weather: ${nightweather}; temperature: ${nighttemp}; wind direction: ${nightwind}; wind power: ${nightpower};`;
    },
    getShowCompressRe: (successNum, errNum) => {
      return `Image compression completed! Its compression succeeded in ${successNum} and failed in ${errNum}`;
    },
    showMoneyInfo: (rate, update, val, result): string => {
      return `
        ${val} x ${rate} = ${result}
        Current conversion exchange rate is ${rate}
        Exchange rate updated on ${update}
      `;
    },
    getShowImgInfo: (imgSize, width, height, type): string => {
      return `
        Picture size: ${imgSize}
        Picture width: ${width}pixel
        Picture height: ${height}pixel
        Picture type: ${type}
      `;
    },
    getEditWeatherCodeSuccess: (address: string): string => {
      return `System address set ${address} successfully`;
    },
  },
};

export const langFormatData = langFormat[language as LangType];

export const moneysLangData: MoneysLangData = {
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

export const languageType = language;

export default langData[language as LangType];

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
