// https://github.com/xavi-/node-copy-paste/blob/master/index.js
// 如果未安装 xclip，则无法在 Linux 上运行
// 具体复制问题参考https://github.com/xavi-/node-copy-paste/issues
import ncp from 'copy-paste';
import lang from '../../lang';

export const copyToClipboard = (text: string) => {
  ncp.copy(text, () => {
    console.log(lang.copySuccess);
  });
};

