import GotFetch from '../../lib/fetch';
import chalk from 'chalk';
import spinner from '../../lib/spinner';
import lang from '../../lang';
import { getWeatherAPI, printWeather, WeathreRes } from './config';
import weatherCodeList from './data';

export type weatherOpt = {
  [key: string]: string | boolean;
};

export default async (text: string | undefined, opt: weatherOpt) => {
  const keys: string[] = Object.keys(opt);
  let type: string = 'all';

  if (keys.length > 0 && opt[`${keys[0]}`] === true) {
    if (['fc', 'findcode'].includes(keys[0])) {
      console.table(weatherCodeList.filter(item => item.address.includes(text)));
      return;
    }
    if (['b', 'base'].includes(keys[0])) type = 'base';
  }

  const cityCode = text || '440306';

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
