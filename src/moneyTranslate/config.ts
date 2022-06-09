import lang, { langFormatData, languageType, moneysLangData } from '../../lang';
import { moneysCountryArr, moneysCurrencyArr, ExchangeRateKey, supportCurrencys } from './data';
import inquirer from 'inquirer';
import dayjs from 'dayjs';
import GotFetch from '../../lib/fetch';
import { consoleErr, mul } from '../../lib/utils';
import spinner from '../../lib/spinner';

type CodeType = 'country' | 'currency';

type PrefixUintKey = 'currency_en' | 'currency_cn';

type FetchMoneyRes = {
  result: string;
  time_last_update_unix: number;
  conversion_rates: {
    [key: string]: number;
  };
  ['error-type']: string;
};

export const getShowArr = (type: CodeType) =>
  type === 'country' ? moneysCountryArr : moneysCurrencyArr;

export const showCodeTable = (type: CodeType = 'country') => {
  const showArr = getShowArr(type);
  const [moneyKeys, moneyKeyLabels] = [Object.keys(moneysLangData), Object.values(moneysLangData)];
  console.table(
    showArr.map(item => {
      const re = {
        [moneyKeyLabels[0]]: item[moneyKeys[0] as 'en' | 'cn'],
        [moneyKeyLabels[1]]: item[moneyKeys[1] as 'currency_code'],
        [moneyKeyLabels[2]]: item[moneyKeys[2] as PrefixUintKey],
      };
      if (type !== 'country') delete re[moneyKeyLabels[0]];
      return re;
    })
  );
};

export const getRequestMoneyUrl = (currencyCode: string): string =>
  `https://v6.exchangerate-api.com/v6/${ExchangeRateKey}/latest/${currencyCode}`;

export const requestMoneyExchange = async (
  currencyCode: string,
  toCode: string
): Promise<{ success: boolean; rate?: number; update?: string }> => {
  const { code, res } = await GotFetch.get(getRequestMoneyUrl(currencyCode), true);
  const {
    result,
    time_last_update_unix,
    conversion_rates,
    'error-type': errorType,
  } = res as FetchMoneyRes;
  if (code !== 0 || result !== 'success') {
    console.error(errorType || '获取转换汇率失败！');
    return {
      success: false,
    };
  }
  return {
    success: true,
    rate: conversion_rates[toCode],
    update: dayjs.unix(time_last_update_unix).format('YYYY-MM-DD HH:mm:ss'),
  };
};

export const selectByMoney = async (type: CodeType) => {
  const typeMap = {
    country: {
      fromMessage: lang.moneyFromCountryTips,
      toMessage: lang.moneyToCountryTips,
      prefix: languageType,
    },
    currency: {
      fromMessage: lang.moneyFromCurrnecyTips,
      toMessage: lang.moneyToCurrnecyTips,
      prefix: `currency_${languageType}`,
    },
  };
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectFrom',
        message: typeMap[type].fromMessage,
        choices: getShowArr(type).map(
          item => `${item[typeMap[type].prefix as PrefixUintKey]}---> ${item.currency_code}`
        ),
        filter: (val: string) => {
          return val.split('---> ')[1];
        },
        loop: false,
      },
      {
        type: 'list',
        name: 'selectTo',
        message: typeMap[type].toMessage,
        choices: getShowArr(type).map(
          item => `${item[typeMap[type].prefix as PrefixUintKey]}---> ${item.currency_code}`
        ),
        filter: (val: string) => {
          return val.split('---> ')[1];
        },
        loop: false,
      },
      {
        type: 'number',
        name: 'inputMoney',
        message: lang.moneyInputNumber,
      },
    ])
    .then(async answers => {
      const { selectFrom, selectTo, inputMoney } = answers;
      spinner.log(`🚗${lang.moneyExchangeGetting}`);
      const { success, rate, update } = await requestMoneyExchange(
        selectFrom as string,
        selectTo as string
      );
      if (success) {
        spinner.success(lang.moneyExchangeGetSuccess);
        console.log(
          langFormatData.showMoneyInfo(
            rate,
            update,
            inputMoney as number,
            mul(inputMoney as number, rate)
          )
        );
      }
    })
    .catch(err => {
      spinner.fail(lang.moneyExchangeGetError);
      console.log(err);
    });
};

export const inputByMoney = async (dbCode: string) => {
  const codeArr = dbCode.split('-');

  if (codeArr.length !== 2) {
    consoleErr(lang.optionError2);
    return;
  }

  if (!supportCurrencys.includes(codeArr[0]) || !supportCurrencys.includes(codeArr[1])) {
    console.error(lang.moneyCodeErr);
    return;
  }

  inquirer
    .prompt([
      {
        type: 'number',
        name: 'inputMoney',
        message: lang.moneyInputNumber,
      },
    ])
    .then(async answers => {
      const { inputMoney } = answers;
      const { success, rate, update } = await requestMoneyExchange(codeArr[0], codeArr[1]);
      if (success) {
        console.log(
          langFormatData.showMoneyInfo(
            rate,
            update,
            inputMoney as number,
            mul(inputMoney as number, rate)
          )
        );
      }
    })
    .catch(err => console.error(err));
};
