import lang from '../../lang';
import { CMD } from '../../lib/commonType';
import spinner from '../../lib/spinner';
import { consoleErr } from '../../lib/utils';

import {
  getRandomNum,
  getUniqueid,
  getTimeStamp,
  getRandomLetter,
  getRandomPhone,
  getRandomHue,
} from './format';

export default (val: string, cmd: CMD) => {
  const keys = Object.keys(cmd);
  const { length } = keys;
  if (length > 1) {
    consoleErr(lang.optionError);
    return;
  }
  const key: string = keys[0] || '';
  switch (key) {
    case 'random':
      getRandomNum(val);
      break;
    case 'uniqueid':
      getUniqueid();
      break;
    case 'timestamp':
      getTimeStamp(val);
      break;
    case 'randomletter':
      getRandomLetter(val);
      break;
    case 'randomphone':
      getRandomPhone();
      break;
    case 'randomhue':
      getRandomHue();
      break;
    default:
      break;
  }
};
