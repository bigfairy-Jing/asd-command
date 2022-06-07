import lang from '../../lang';

import {
  getRandomNum,
  getUniqueid,
  getTimeStamp,
  getRandomLetter,
  getRandomPhone,
  getRandomHue,
} from './format';

// eslint-disable-next-line @typescript-eslint/ban-types
export default (val: string, cmd: {}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(cmd);
  const { length } = keys;
  if (length > 1) {
    console.error(lang.optionError);
    return;
  }
  const key: string = length === 1 ? keys[0] : '';
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
      break;
    case 'randomhue':
      getRandomHue();
      break;
    default:
      break;
  }
};
