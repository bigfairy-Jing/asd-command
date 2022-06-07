import { name, version } from '../package.json';

import { language } from '../static/data';

type LangdData = {
  cn: {
    [key: string]: string | ((...argv: (string | number)[]) => string);
  };
  en: {
    [key: string]: string | ((...argv: (string | number)[]) => string);
  };
};

type MoneysLangData = {
  cn?: string;
  en?: string;
  currency_code: string;
  currency_cn: string;
};

export const langData: LangdData = {
  cn: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `您当前的Node版本为${process.version}, 但是 ${name} 需要Node版本${nodeVersion}, 请升级您系统的node版本`;
    },
    getArgsErr: (name, len) => {
      return `当前命令${name}, 最多支持${len}个参数，请检查后重新输入命令！`;
    },
    successDL: `恭喜您！${name} V${version} 下载成功!`,
    // 翻译
    translate: '中英互译',
    translating: '努力翻译中......',
    translateError: '翻译错误!',
    translateSuccess: '翻译成功!',

    // 天气
    weather: '天气查询',
    weathering: '天气查询中......',
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
    imgFileIputErr: '文件传入类型错误,为非图片类型',
    imgInputPathErr: '输入路径有误，非图片类型或包含图片文件夹',
    imgCompressSuccess: '图片压缩成功',
    getShowCompressRe: (successNum, errNum) => {
      return `图片压缩完毕! 其压缩成功${successNum}个, 压缩失败${errNum}个 `;
    },
    moneyFromCountryTips: '请选择要转换的货币从属国家 - 从',
    moneyToCountryTips: '请选择要转换到的货币从属国家 - 至',
    moneyFromCurrnecyTips: '请选择要转换的货币 - 从',
    moneyToCurrnecyTips: '请选择要转换至的货币 - 至',
    moneyInputNumber: '请输入转换的金额',
    moneyCodeErr: '输入货币编码不支持, 请使用-l 或 --ls 查看所有支持的编码',
    showMoneyInfo: (rate, update, val, result): string => {
      return `
        ${val} x ${rate} = ${result}
        当前转换汇率为 ${rate}
        汇率更新时间为 ${update}
      `;
    },
    copySuccess: '内容已复制到剪贴板',
    getShowImgInfo: (imgSize, width, height, type): string => {
      return `
        图片大小: ${imgSize}
        图片宽: ${width}像素
        图片高: ${height}像素
        图片类型: ${type}
      `;
    },
  },
  en: {
    vaildVersion(name: string, nodeVersion: string): string {
      return `Your current node version is ${process.version}, but ${name} requires node version ${nodeVersion}. Please upgrade your local Node`;
    },
    successDL: `${name} V${version} download successfully!`,
    translate: 'Chinese<>English translate',
    translating: 'In translation......',
  },
};

// export const langFormat = {
//   cn: {

//   },
//   en: {
//   }
// }

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

export default langData[language as 'cn' | 'en'];
