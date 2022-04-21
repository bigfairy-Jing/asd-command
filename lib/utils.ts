import semver, { Range } from 'semver';
import chalk from 'chalk';
import _ from 'lodash';
import fs from 'fs';
import lang from '../lang';
import Regs from './reg';
import { name, nodeVersion } from '../package.json';
import Decimal from 'decimal.js';

export const mul = (num: number, dep: number) => new Decimal(+num).mul(+dep).toNumber();
export const div = (num: number, dep: number) => new Decimal(+num).div(+dep).toNumber();

export enum PathTypeEnum {
  FILE = 'file',
  DIRECTORY = 'directory',
  UNKNOWN = 'unknown',
}

type PathType = PathTypeEnum[keyof PathTypeEnum];

export default {
  deepCopy<T>(x: T): T {
    return _.cloneDeep(x);
  },
  isEmpty(x: null | undefined | string): boolean {
    return [null, undefined, ''].includes(x);
  },
  isObject(x: unknown): boolean {
    return _.isObject(x);
  },
};

export const validNodeVersion = (): boolean => {
  if (!semver.satisfies(process.version, (nodeVersion as unknown) as Range)) {
    // @ts-ignore
    console.log(chalk.red(lang.vaildVersion(name, nodeVersion)));
    return false;
  }
  return true;
};

export const splitTrim = (str: string): string[] =>
  str.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/);

export const isPositiveNumber = (num: string | number) => /(^[1-9]\d*$)/.test(`${num}`);

export const isPathType = (str: string): PathType => {
  const stat = fs.lstatSync(str);
  console.log(str);
  if (stat.isDirectory()) return 'directory';
  if (stat.isFile()) return 'file';
  return 'unknown';
};

export const formatLink = (link: string): string =>
  link.includes('http://') || link.includes('https:') ? link : `http://${link}`;

export const isImgFilePath = (str: string) =>
  isPathType(str) === PathTypeEnum.FILE && Regs.img.val.test(str);

export const sizeTranslte = (
  size: number,
  type: 'ByteToKB' | 'KBToByte' | 'ByteToMB' = 'ByteToKB'
) => {
  switch (type) {
    case 'ByteToKB':
      return div(size, 1024).toFixed(2);
      break;
    case 'KBToByte':
      return mul(size, 1024);
      break;
    case 'ByteToMB':
      return div(size, 1024 * 1024).toFixed(2);
      break;
  }
};
