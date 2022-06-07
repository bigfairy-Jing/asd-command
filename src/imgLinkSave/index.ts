import fs from 'fs';
import lang from '../../lang';
import GotFetch from '../../lib/fetch';
import { consoleErr, consoleSuccess } from '../../lib/utils';

const urlSave = async (url: string) => {
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
    if (err) consoleErr(lang.imageSaveFail as string);
    else consoleSuccess(lang.imageSaveSuccess as string);
  });
};

export default (val: string) => {
  urlSave(val);
};
