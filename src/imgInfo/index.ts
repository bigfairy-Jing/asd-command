import { consoleSuccess, isImgFilePath, sizeTranslte } from '../../lib/utils';
import imgSize from 'image-size';
import fs from 'fs';
import Regs from '../../lib/reg';
import lang from '../../lang';

export const getImageInfoPath = (str: string) => {
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
    consoleSuccess(
      (lang.getShowImgInfo as (...argv: (string | number)[]) => string)(
        sizeInfo,
        width,
        height,
        type
      )
    );
  } catch (error) {
    console.error(error);
  }
};

export const getImageInfoLink = (str: string) => {};
