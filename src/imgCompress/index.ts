import fs from 'fs';
import tinify from 'tinify';
import path from 'path';
// import images from 'images';
import imagemin from 'imagemin';
import imageminMozjepg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { consoleErr, consoleSuccess, isPathType, PathTypeEnum } from '../../lib/utils';
import Regs from '../../lib/reg';
import TINIFYKEY from './data';
import { CMD } from '../../lib/commonType';
import lang, { langFormatData } from '../../lang';
import spinner from '../../lib/spinner';

type TempFileItem = {
  fromFile: string;
  toFile: string;
};

// 使用PQueue 批量压缩
// PQueue

//  Imagemin
// “imagemin”: “^7.0.1”,
// “imagemin-mozjpeg”: “^8.0.0”,
// “imagemin-pngquant”: “^8.0.0”,

const compressImgmin = async (inPath: string, toPath: string) => {
  return new Promise<void>((resolve, reject) => {
    imagemin([inPath], {
      plugins: [
        imageminMozjepg({ quality: 70 }),
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    })
      .then(res => {
        fs.writeFile(toPath, res[0].data, 'binary', err => {
          if (err) reject();
          else resolve();
        });
      })
      .catch(err => {
        console.log(err);
        reject();
      });
  });
};

const compressByTinify = async (inPath: string, toPath: string) => {
  tinify.key = TINIFYKEY;
  const source = tinify.fromFile(inPath);
  await source.toFile(toPath);
};

// 以下仅仅支持jpg 弃用, 暂时放在此处
// const compressByNodeImages = (str: string, quality:number = 75) => {
//   str = process.argv[2];
//   const fileName = `${Date.now()}.png`;
//   console.log(str, fileName)
//   images(str).save(fileName, {
//     quality
//   })
// };

// const compress = (str, type) => {
//   const isImgFile = isPathType(str) === PathTypeEnum.FILE && Regs.img.val.test(str);
//   if(!isImgFile) return
// }

const formatDir = (inPath: string, toPath: string, tempFiles: TempFileItem[] = []) => {
  const files = fs.readdirSync(inPath);
  for (const file of files) {
    const filePath = `${inPath}/${file}`;
    const toFilePath = `${toPath}/${file}`;
    if (isPathType(filePath) === PathTypeEnum.DIRECTORY) {
      formatDir(filePath, toFilePath, tempFiles);
    } else {
      if (Regs.img.val.test(file)) {
        // 判断输入是否有权限
        try {
          fs.accessSync(toPath);
          tempFiles.push({
            fromFile: filePath,
            toFile: toFilePath,
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
  return tempFiles;
};

export default async (inPath: string, toPath: string, cmd: CMD) => {
  const pathType = isPathType(inPath);
  const keys = Object.keys(cmd);
  const type = ['nodeimages', 'tinypng'].includes(keys[0]) ? keys[0] : 'tinypng';
  const compressFn = {
    tinypng: compressByTinify,
    nodeimages: compressImgmin,
  }[type];
  if (pathType === PathTypeEnum.FILE) {
    if (!Regs.img.val.test(inPath)) {
      consoleErr(lang.imgFileIputErr);
      return;
    }
    // 单个图片文件
    try {
      fs.accessSync(toPath);
      spinner.log(lang.imgCompression);
      await compressFn(inPath, `${toPath}/${path.basename(inPath)}`);
      spinner.success(lang.imgCompressSuccess);
    } catch (error) {
      console.log(error);
      process.exit(12);
    }
  }

  if (pathType === PathTypeEnum.DIRECTORY) {
    const fileCompressArr = formatDir(inPath, toPath);
    if (fileCompressArr.length === 0) {
      consoleErr(lang.imgInputPathErr);
      return;
    }
    try {
      spinner.log(lang.imgCompression);
      const compreRes = await Promise.allSettled(
        fileCompressArr.map(({ fromFile, toFile }) => compressFn(fromFile, toFile))
      );
      let successNum = 0;
      let errNum = 0;
      compreRes.forEach(comreItem => {
        if (comreItem.status === 'fulfilled') successNum++;
        else errNum++;
      });
      spinner.success(langFormatData.getShowCompressRe(successNum, errNum));
    } catch (error) {
      console.log(error);
      spinner.stop();
    }
  }
};
