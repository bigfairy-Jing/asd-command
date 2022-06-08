import fs from 'fs';
import lang from '../../lang';
import GotFetch from '../../lib/fetch';
import { consoleErr, consoleSuccess } from '../../lib/utils';
import imgSize from 'image-size';
import { name } from '../../package.json';

const urlSave = async (url: string) => {
  const { code, res } = (await GotFetch.get(url.replace(/\\/g, ''))) as {
    code: number;
    res: {
      rawBody: Buffer;
    };
  };
  if (code !== 0) {
    console.error(lang.imgUrlError);
    return;
  }

  const { type } = imgSize(Buffer.from(res.rawBody));

  fs.writeFile(`${name}-save-${Date.now()}.${type}`, res.rawBody, 'binary', err => {
    if (err) consoleErr(lang.imageSaveFail);
    else consoleSuccess(lang.imageSaveSuccess);
  });
};

export default (val: string) => {
  urlSave(val);
};
