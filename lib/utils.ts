import semver, { Range } from 'semver';
import chalk from 'chalk';
import _ from 'lodash';
import fs from 'fs';
import lang from '../lang';
import Regs from './reg';
import { name, nodeVersion } from '../package.json';
import Decimal from 'decimal.js';
import minimist from 'minimist';

export const mul = (num: number, dep: number) => new Decimal(+num).mul(+dep).toNumber();
export const div = (num: number, dep: number) => new Decimal(+num).div(+dep).toNumber();

export const consoleErr = (str: string) => {
  console.log(chalk.red(`\n 😔 ${str}`));
};

export const consoleSuccess = (str: string) => {
  console.log(`🎉 ${str}`);
};

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

export const verifyArgs = (name: string, len: number = 1) => {
  consoleErr(JSON.stringify(minimist(process.argv.slice(2))._));
  if (minimist(process.argv.slice(3))._.length > len) {
    consoleErr((lang.getArgsErr as (...argv: (string | number)[]) => string)(name, len));
    process.exit(9);
  }
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

export const getRootDir = () => fs.realpathSync(process.cwd());
