import semver, { Range } from "semver";
import chalk from "chalk";
import _ from "lodash";
import lang from "../lang";
import { name, nodeVersion } from "../package.json";

export default {
  deepCopy<T>(x: T): T {
    return _.cloneDeep(x) ;
  },
  isEmpty(x: null | undefined | string): boolean {
    return [null, undefined, ""].includes(x);
  },
  isObject(x: unknown): boolean {
    return _.isObject(x);
  },
};

export const validNodeVersion = (): boolean => {
  if (!semver.satisfies(process.version, nodeVersion as unknown as Range)) {
    // @ts-ignore
    console.log(chalk.red(lang.vaildVersion(name, nodeVersion)));
    return false;
  }
  return true;
};
