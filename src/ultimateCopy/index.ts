import { copyToClipboard } from './config';
import { splitTrim, isPositiveNumber } from '../../lib/utils';

// 校验 an + b | an的格式
const validN = (str: string) => /(^[1-9]\d*(n)(\+[1-9]\d*)?$)/.test(str);

// 二维数组横纵坐标转换
const reversalDoubleArray = (arr: (number | string)[][]) => {
  let maxLenIndex: number = 0;

  arr.reduce((pre, now, i) => (now.length > pre.length ? ((maxLenIndex = i), now) : pre), []);

  return arr[0].map((col, i) => arr.map(row => row[i]));
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
    case 'num':
      return args.every(arg => isPositiveNumber(arg));
      break;
    case 'expression':
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
  copyToClipboard(copyTexts.join(` `));
  logTable && console.table(copyTexts);
};

// 表达式复制
export const copyByExpre = (text: string, expres: string[], logTable: boolean = false) => {
  const texts = splitTrim(text);
  const expresNumArr = expres.map(exp => [+exp.split('n')[0], getExpresNumNext(exp)]);
  console.log(expresNumArr);
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

  console.log(resultArr);
  const copyTexts = resultArr.map(res => res.join(' ----> ')).join(`
`);
  copyToClipboard(copyTexts);
  console.table(resultArr);
};

copyByExpre(
  `store_id	integer	
必须
门店id	
bank_name	string	
必须
银行名称	
id	integer	
必须 名称
account_name	string	
必须
账户名	
account_number	string	
必须
账号	12312`,
  ['4n+1']
);

//
