import fs from 'fs';
import path from 'path';
import mimeType from 'mime-types';
import lang from '../../lang';
import regs from '../../lib/reg';
import { getBase64ImgType } from './config';
import GotFetch from '../../lib/fetch';

const imgToBase64 = (imgLink: string) => {
  imgLink = process.argv[2];
  const stat = fs.lstatSync(imgLink);
  if (!stat.isFile() && regs.img.val.test(imgLink)) {
    console.error(lang.showInputImgFile as string);
    return;
  }
  const filePath = path.resolve(imgLink);
  const fileMimeType = mimeType.lookup(filePath);
  const fileData = fs.readFileSync(filePath);
  const base64Data = Buffer.from(fileData).toString('base64');
  const base64String = `data:${fileMimeType as string} ;base64,${base64Data}`;
  console.log(base64String);
};

const Base64ToImg = (base64Str: string) => {
  base64Str = process.argv[2];
  const baseStr = base64Str.replace(/^data:image\/\w+;base64,/, '');
  const imgName = getBase64ImgType(base64Str);
  fs.writeFileSync(`base${Date.now()}${imgName}`, baseStr, 'base64');
};

const urlSave = async (url: string) => {
  url = process.argv[2];
  const { code, res } = (await GotFetch.get(url.replace(/\\/g, ''))) as {
    code: number;
    res: {
      rawBody: NodeJS.ArrayBufferView;
    };
  };
  if (code !== 0) {
    console.error(lang.imgUrlError);
    return;
  }

  fs.writeFile(`img${Date.now()}.png`, res.rawBody, 'binary', err => {
    if (err) console.log('图片保存失败');
    else console.log('保存成功');
  });
};
