import GotFetch from '../../lib/fetch';
import chalk from 'chalk';
import fs from 'fs';
import spinner from '../../lib/spinner';
import lang, { langFormatData } from '../../lang';
import { getWeatherAPI, printWeather, WeathreRes } from './config';
import weatherCodeList, { WItem } from './data';
import { consoleErr, consoleSuccess } from '../../lib/utils';
import { CMD } from '../../lib/commonType';
import packageJson from '../../package.json';

const _packgeJson = JSON.parse(JSON.stringify(packageJson));

const tempCityCode: string = _packgeJson.city || '110100';

const writeCode = (item: WItem) => {
  const { code, address } = item;
  _packgeJson.city = code;
  const str = JSON.stringify(_packgeJson);
  try {
    fs.writeFileSync('./dist/package.json', str);
    consoleSuccess(langFormatData.getEditWeatherCodeSuccess(address));
  } catch (error) {
    console.log(error);
  }
};

const getWeather = async (inputCityCode: string, type: string) => {
  const cityCode = inputCityCode || tempCityCode;

  if (!weatherCodeList.find(item => item.code === cityCode)) {
    consoleErr(lang.weatherCodeNotFind);
    return;
  }

  spinner.log(lang.weathering);
  const { code, res, error } = await GotFetch.get(`${getWeatherAPI(type, cityCode)}`, true);

  if (code !== 0 || (res as WeathreRes).status !== '1') {
    spinner.stop();
    console.log(`${chalk.red(error)}`);
    return;
  }

  spinner.stop();
  printWeather(type, res as WeathreRes);
};

export default async (inputCityCode: string | undefined, opt: CMD) => {
  const keys: string[] = Object.keys(opt);
  const { length } = keys;
  if (length > 1) {
    consoleErr(lang.optionError);
    return;
  }

  const type: string = keys[0] ? keys[0] : 'all';

  // 寻找code码 findcode
  if (type === 'findcode') {
    const findList = weatherCodeList.filter(item => item.address.includes(inputCityCode));
    findList.length > 0 ? console.table(findList) : consoleErr(lang.weatherCodeNotFind);
    return;
  }

  // 设置本机地区 setsystem
  if (type === 'setsystem') {
    const findItem = weatherCodeList.find(item => item.code === inputCityCode);
    if (!findItem) {
      consoleErr(lang.weatherCodeNotFind);
      return;
    }
    writeCode(findItem);
    return;
  }

  // 查询天气 base | all
  getWeather(inputCityCode, type);
};
