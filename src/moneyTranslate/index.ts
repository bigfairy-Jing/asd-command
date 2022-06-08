// 文档 https://www.exchangerate-api.com/docs/overview

import lang from '../../lang';
import { CMD } from '../../lib/commonType';
import { showCodeTable, selectByMoney, inputByMoney } from './config';

export default (translateStr: string, cmd: CMD) => {
  const keys = Object.keys(cmd);
  const { length } = keys;

  if (length !== 1) {
    console.error(lang.optionError);
    return;
  }
  const type = keys[0];

  switch (type) {
    // 通过选择国家
    case 'selectcountry':
      selectByMoney('country');
      break;
    // 通过选择币种
    case 'selectcurrency':
      selectByMoney('currency');
      break;
    // 通过输入 a-b编码
    case 'bycode':
      inputByMoney(translateStr);
      break;
    // 展示所有币种
    case 'showcode':
      showCodeTable('currency');
      break;
    // 展示所有国家
    case 'showcurrency':
      showCodeTable('country');
      break;
  }
};
