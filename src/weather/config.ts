import chalk from 'chalk';
import lang, { langFormatData } from '../../lang';

export const getWeatherAPI = (type: string, city: string): string => {
  const { WEATHERKEY } = process.env;
  return `https://restapi.amap.com/v3/weather/weatherInfo?key=${'4e40543244f03b9a58ca5c4f0f73d455'}&extensions=${type}&output=JSON&city=${city}`;
};

type WeathreRes = {
  lives: {
    city: string;
    weather: string;
    winddirection: string;
    windpower: string;
    temperature: string;
    reporttime: string;
    humidity: string;
  }[];
  forecasts: {
    city: string;
    reporttime: string;
    casts: {
      dayweather: string;
      nightweather: string;
      daytemp: string;
      nighttemp: string;
      daywind: string;
      nightwind: string;
      daypower: string;
      nightpower: string;
    }[];
  }[];
};

export const printWeather = (type: string, res: WeathreRes): void => {
  // 当前实时天气
  if (type === 'base') {
    const now = res.lives[0];
    const { city, weather, winddirection, windpower, temperature, reporttime, humidity } = now;
    console.log(
      chalk.blue(
        langFormatData.showNowWeather(
          city,
          weather,
          winddirection,
          windpower,
          temperature,
          humidity,
          reporttime
        )
      )
    );
    return;
  }
  // 今日和未来天气;
  const { forecasts } = res;
  const { reporttime, city, casts } = forecasts[0];
  const nameMap = {
    '0': lang.today,
    '1': lang.tomorrow,
    '2': lang.afterTomorrow,
    '3': lang.threeDaysFromNow,
  };
  const showstr = casts
    .map((cast, index) => {
      const {
        dayweather,
        nightweather,
        daytemp,
        nighttemp,
        daywind,
        nightwind,
        daypower,
        nightpower,
      } = cast;
      // @ts-ignore
      const name = nameMap[`${index}`];
      const detail = langFormatData.showFeatureWeathre(
        dayweather,
        nightweather,
        daytemp,
        nighttemp,
        daywind,
        nightwind,
        daypower,
        nightpower
      );
      return `
${chalk.red(name as string)}
${detail}
    `;
    })
    .reduce((str, now) => str + now);

  console.log(chalk.blue(`${langFormatData.showFeatureWeatherDesc(city, reporttime)}${showstr}`));
};
