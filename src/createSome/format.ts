import chalk from 'chalk';
import lang from '../../lang';
import { splitTrim } from '../../lib/utils';
import uuid from 'node-uuid';
import dayjs from 'dayjs';
import { phoneNumberPre, charsStr, sixteen as sixteenArr } from './config';
import colorTranslate from '../colorTranslate';

const randFormat = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const randomNum = (step: string = ''): number => {
  let stepArr = splitTrim(step);

  if (stepArr.length === 1 && !stepArr[0]) {
    stepArr = ['1', '100'];
  }

  const isValid: boolean = stepArr.every((step: string) => /^[0-9]+?$/.test(step));

  if (!isValid) {
    console.error(lang.inputNeedNumber);
    return;
  }

  // 1个数字补充 1 - 另一个数字
  stepArr = stepArr.length === 1 ? ['1', stepArr[0]] : stepArr;

  // 生成一个 stepArr[0] - stepArr[1] 之间的随机数
  const numberArr = stepArr.map(step => +step);

  const randomNumber = randFormat(Math.min(...numberArr), Math.max(...numberArr));
  return randomNumber;
};

export const getRandomNum = (step: string = '') => {
  const num = randomNum(step);
  if (num) console.log(chalk.green(num));
};

export const getUniqueid = () => {
  console.log(chalk.green(uuid.v4()));
};

export const getTimeStamp = (val: dayjs.ConfigType = '') => {
  try {
    console.log(
      chalk.green(`
      ${val ? dayjs(val).valueOf() : dayjs().valueOf()}
      ${val ? dayjs(val).unix() : dayjs().unix()}
    `)
    );
  } catch (error) {
    console.error(lang.translateTimeErro);
  }
};

export const getRandomLetter = (val: string) => {
  if (!!val && !/(^[1-9]\d*$)/.test(val)) {
    console.error(lang.inputNeedNumber);
    return;
  }
  const len = +val || 10;
  const res = new Array(len)
    .fill('')
    .map(() => {
      const rlIndex = Math.floor(Math.random() * charsStr.length);
      return charsStr.charAt(rlIndex);
    })
    .join('');
  console.log(chalk.green(res));
};

export const getRandomPhone = () => {
  const prefixArr = [...phoneNumberPre];
  const i = +randomNum(`${prefixArr.length}`) - 1;
  let phone: string = prefixArr[i];
  for (let j = 0; j < 8; j++) {
    phone += Math.floor(Math.random() * 10);
  }
  console.log(chalk.green(phone));
};

// 获取随机颜色
export const getRandomHue = () => {
  let str: string = '';
  for (let i = 0; i < 6; i++) {
    str += sixteenArr[parseInt(`${Math.random() * 16}`)];
  }
  colorTranslate(str);
  const hex = chalk.hex(str);
  console.log(`#${str}`);
  console.log(hex(`#${str}`));
};
