// https://github.com/xavi-/node-copy-paste/blob/master/index.js
// 如果未安装 xclip，则无法在 Linux 上运行
// 具体复制问题参考https://github.com/xavi-/node-copy-paste/issues
import ncp from 'copy-paste';
import lang from '../../lang';
import { consoleSuccess } from '../../lib/utils';

export const copyToClipboard = (text: string, successText: string = '') => {
  ncp.copy(text, () => {
    consoleSuccess( successText || lang.copySuccess as string);
  });
};

