import chalk from 'chalk';
import lang from '../../lang';
import { splitTrim, consoleErr } from '../../lib/utils';
import { hexReg, rgbaReg } from './config';

type ColorType = 'rgba' | 'hex' | '';

const validColor = (colorStr: string): ColorType => {
  colorStr = splitTrim(colorStr).join('');
  console.log(colorStr)
  if (rgbaReg.test(colorStr)) {
    return 'rgba';
  }
  if (hexReg.test(colorStr)) {
    return 'hex';
  }
  return '';
};

export default (colorStr: string) => {
  const colorType = validColor(colorStr);

  if (!colorType) {
    consoleErr(lang.colorInputErr);
  }

  if (colorType === 'rgba') {
    const rgbaArr = colorStr.match(rgbaReg);
    let r: string,
      g: string,
      b: string,
      a: string = '';
    r = parseInt(rgbaArr[1]).toString(16);
    r = r.length === 1 ? `0${r}` : r;
    g = parseInt(rgbaArr[2]).toString(16);
    g = g.length === 1 ? `0${g}` : g;
    b = parseInt(rgbaArr[3]).toString(16);
    b = b.length === 1 ? `0${b}` : b;
    if (rgbaArr[5]) {
      a = parseInt(rgbaArr[5]).toString(16);
      a = a.length === 1 ? `0${a}` : a;
    }
    console.log(chalk.green(`#${r}${g}${b}${a}`));
  } else {
    colorStr = colorStr.includes('#') ? colorStr.substring(1) : colorStr;
    // 三位转成六位
    if (colorStr.length === 3) colorStr = `${colorStr}${colorStr}`;
    const colorResArr = [];
    for (let i = 0; i < colorStr.length; i += 2) {
      colorResArr.push(parseInt(`0x${colorStr.slice(i, i + 2)}`));
    }
    const res =
      colorResArr.length === 4
        ? `rgba(${colorResArr[0]},${colorResArr[1]},${colorResArr[2]},${colorResArr[3]})`
        : `rgba(${colorResArr[0]},${colorResArr[1]},${colorResArr[2]})`;
    console.log(chalk.green(res));
  }
};
