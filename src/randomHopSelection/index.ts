import { CMD } from '../../lib/commonType';
import lang from '../../lang';

import { consoleErr, splitTrim } from '../../lib/utils';

const isInLimit = (num: number): boolean => {
  return num > 1 && num < 11 && /\d/.test(`${num}`);
};

export default (numString: string, cmd: CMD) => {
  const keys = Object.keys(cmd);
  const nums: number[] = splitTrim(numString).map(x => +x);

  let [a, b] = nums;

  if (nums.length !== 2 || !isInLimit(a) || !isInLimit(b)) {
    consoleErr(lang.optionError2);
    return;
  }

  [a, b] = a > b ? [b, a] : [a, b];

  const limit: number = keys[0] === 'thousand' ? 1000 : 100;

  const result: number[] = new Array(limit)
    .fill(1)
    .map((x, i) => i)
    .filter(y => y % a !== 0 && y % b !== 0);

  console.log(JSON.stringify(result));
};
