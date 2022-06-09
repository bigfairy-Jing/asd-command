import { copyByExpre, copyByNum, validArgu } from './config';
import { CMD } from '../../lib/commonType';
import lang from '../../lang';
import { consoleErr, splitTrim } from '../../lib/utils';

export default (copyStr: string, opt: string, cmd: CMD) => {
  const keys = Object.keys(cmd);
  const { length } = keys;
  const opts = splitTrim(opt);

  if (length !== 1) {
    consoleErr(lang.optionError);
    return;
  }

  if (opts.length === 0) {
    consoleErr(lang.secondParamErr);
  }

  switch (keys[0]) {
    case 'bynumber':
      if (!validArgu('bynumber', opts)) {
        consoleErr(lang.secondParamErr);
        return;
      }
      copyByNum(
        copyStr,
        opts.map(x => +x)
      );
      break;
    case 'byexpre':
      if (!validArgu('byexpre', opts)) {
        consoleErr(lang.secondParamErr);
        return;
      }
      copyByExpre(copyStr, opts);
      break;
  }
};
