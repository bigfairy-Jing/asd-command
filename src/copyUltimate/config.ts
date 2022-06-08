// https://github.com/xavi-/node-copy-paste/blob/master/index.js
// 如果未安装 xclip，则无法在 Linux 上运行
// 具体复制问题参考https://github.com/xavi-/node-copy-paste/issues
import ncp from 'copy-paste';
import lang from '../../lang';
import { consoleSuccess } from '../../lib/utils';
import { splitTrim, isPositiveNumber } from '../../lib/utils';

export const copyToClipboard = (text: string, successText: string = '') => {
  ncp.copy(text, () => {
    consoleSuccess(successText || (lang.copySuccess as string));
  });
};

// 校验 an + b | an的格式
export const validN = (str: string) => /(^[1-9]\d*(n)(\+[1-9]\d*)?$)/.test(str);

// 二维数组横纵坐标转换
export const reversalDoubleArray = (arr: (number | string)[][]) => {
  let maxLenIndex: number = 0;

  arr.reduce((pre, now, i) => (now.length > pre.length ? ((maxLenIndex = i), now) : pre), []);

  return arr[maxLenIndex].map((col, i) => arr.map(row => row[i]));
};

const getExpresNumNext = (exp: string): number => {
  if (exp.includes('+')) {
    return +exp.split('+')[1];
  } else if (exp.includes('-')) {
    return -+exp.split('-')[1];
  } else return 0;
};

// 校验传入参数

export const validArgu = (type: string, args: string[]): boolean => {
  switch (type) {
    case 'bynumber':
      return args.every(arg => isPositiveNumber(arg));
      break;
    case 'byexpre':
      return args.every(arg => validN(arg));
      break;
    default:
      return false;
      break;
  }
};

// 顺序数字复制
export const copyByNum = (text: string, nums: number[], logTable: boolean = false) => {
  const texts: string[] = splitTrim(text);
  const copyTexts: string[] = nums.map(i => texts[i - 1]);
  copyToClipboard(copyTexts.join(` `), lang.successSelectCopy as string);
  consoleSuccess(copyTexts.join('  '));
  logTable && console.table(copyTexts);
};

// 表达式复制
export const copyByExpre = (text: string, expres: string[], logTable: boolean = true) => {
  const texts = splitTrim(text);
  const expresNumArr = expres.map(exp => [+exp.split('n')[0], getExpresNumNext(exp)]);
  const tempArr: string[][] = [];

  expresNumArr.forEach(([prep, remainder], i) => {
    tempArr[i] = [];
    texts.forEach((text, index) => {
      if ((index + 1 - remainder) % prep === 0) {
        tempArr[i].push(text);
      }
    });
  });

  const resultArr = reversalDoubleArray(tempArr);
  const copyTexts = resultArr.map(res => res.join(' ----> ')).join(`
`);
  copyToClipboard(copyTexts, lang.successSelectCopy as string);
  logTable && console.table(resultArr);
};
