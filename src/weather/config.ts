import chalk from 'chalk';
import lang from '../../lang';

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
        // @ts-ignore
        lang.showNowWeather(
          city,
          weather,
          winddirection,
          windpower,
          temperature,
          humidity,
          reporttime
        ) as string
      )
    );
    return;
  }
  // 今日和未来天气;
  const { forecasts } = res;
  const { reporttime, city, casts } = forecasts[0];
  const nameMap = {
    '0': '今天',
    '1': '明天',
    '2': '后天',
    '3': '大后天',
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
      // @ts-ignore
      const detail = lang.showFeatureWeathre(
        dayweather,
        nightweather,
        daytemp,
        nighttemp,
        daywind,
        nightwind,
        daypower,
        nightpower
      ) as string;
      return `
${chalk.red(name as string)}
${detail}
    `;
    })
    .reduce((str, now) => str + now);

  console.log(
    chalk.blue(
      // @ts-ignore
      `${lang.showFeatureWeatherDesc(city, reporttime) as string}${showstr}`
    )
  );
};
