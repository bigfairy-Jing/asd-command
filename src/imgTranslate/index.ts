import fs from 'fs';
import path from 'path';
import mimeType from 'mime-types';
import lang from '../../lang';
import regs from '../../lib/reg';
// import { getBase64ImgType } from './config';
import { CMD } from '../../lib/commonType';
import { consoleErr } from '../../lib/utils';
import { copyToClipboard } from '../copyUltimate/config';

const imgToBase64 = (imgLink: string) => {
  const stat = fs.lstatSync(imgLink);
  if (!stat.isFile() && regs.img.val.test(imgLink)) {
    consoleErr(lang.showInputImgFile    );
    return;
  }

  if (stat.size > 1024 * 1024 * 100) {
    consoleErr(lang.inputImgMaxSize);
    return;
  }

  const filePath = path.resolve(imgLink);
  const fileMimeType = mimeType.lookup(filePath);
  const fileData = fs.readFileSync(filePath);
  const base64Data = Buffer.from(fileData).toString('base64');
  const base64String = `data:${fileMimeType as string} ;base64,${base64Data}`;
  copyToClipboard(base64String, lang.imgTranslateBase64);
};

// const Base64ToImg = (base64Str: string) => {
//   base64Str = process.argv[2];
//   const baseStr = base64Str.replace(/^data:image\/\w+;base64,/, '');
//   const imgName = getBase64ImgType(base64Str);
//   fs.writeFileSync(`base${Date.now()}${imgName}`, baseStr, 'base64');
// };

export default (val: string, cmd: CMD) => {
  const keys = Object.keys(cmd);
  const { length } = keys;

  if (length !== 1) {
    console.error(lang.optionError);
    return;
  }

  const type = keys[0];
  // 图片转base64
  if (type === 'imgtobase64') {
    imgToBase64(val);
  }
};
