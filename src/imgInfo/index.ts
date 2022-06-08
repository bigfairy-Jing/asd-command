import { consoleSuccess, isImgFilePath, sizeTranslte } from '../../lib/utils';
import imgSize from 'image-size';
import fs from 'fs';
import lang, { langFormatData } from '../../lang';
import GotFetch from '../../lib/fetch';
import { CMD } from '../../lib/commonType';

export const getImageInforPath = (str: string) => {
  const isImg = isImgFilePath(str);
  if (!isImg) {
    console.error(lang.imgUrlError);
    return;
  }
  try {
    const stats = fs.statSync(str);
    const size = stats.size;
    const KBSize = `${sizeTranslte(size, 'ByteToKB')}KB`;
    const MBSize = `${sizeTranslte(size, 'ByteToMB')}MB`;
    const sizeInfo = `${KBSize}(${MBSize})`;
    const dimensions = imgSize(str);
    const { width, height, type } = dimensions;
    consoleSuccess(langFormatData.getShowImgInfo(sizeInfo, width, height, type));
  } catch (error) {
    console.error(error);
  }
};

export const getImageInforLink = async (url: string) => {
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
  const size: number = res.rawBody.length;
  const KBSize = `${sizeTranslte(size, 'ByteToKB')}KB`;
  const MBSize = `${sizeTranslte(size, 'ByteToMB')}MB`;
  const sizeInfo = `${KBSize}(${MBSize})`;
  const dimensions = imgSize(Buffer.from(res.rawBody));
  const { width, height, type } = dimensions;
  consoleSuccess(langFormatData.getShowImgInfo(sizeInfo, width, height, type));
};

export default (str: string, cmd: CMD) => {
  const keys = Object.keys(cmd);

  const type = keys.includes('link') ? 'link' : 'base';

  if (type === 'link') {
    getImageInforLink(str);
  } else getImageInforPath(str);
};
