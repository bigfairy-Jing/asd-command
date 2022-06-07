import fs from 'fs';
import tinify from 'tinify';
import path from 'path';
import images from 'images';
import imagemin from 'imagemin';
import imageminMozjepg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { consoleErr, isPathType, PathTypeEnum } from '../../lib/utils';
import Regs from '../../lib/reg';
import { TINIFYKEY } from '../../static/data';
import { CMD } from '../../lib/commonType';
import lang from '../../lang';

// 使用PQueue 批量压缩
// PQueue

//  Imagemin
// “imagemin”: “^7.0.1”,
// “imagemin-mozjpeg”: “^8.0.0”,
// “imagemin-pngquant”: “^8.0.0”,

const compressImgmin = async (str: string) => {
  str = process.argv[2];
  imagemin([str], {
    // destination: 'build/images',
    plugins: [
      imageminMozjepg({ quality: 70 }),
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  })
    .then(res => {
      console.log(res);
      fs.writeFile(`img${Date.now()}.png`, res[0].data, 'binary', err => {
        if (err) console.log('图片保存失败');
        else console.log('保存成功');
      });
    })
    .catch(err => {
      console.log(err, '_____________)))))))');
    });
  // console.log(res);
};

const compressByTinify = (inPath: string, outPath: string) => {
  tinify.key = TINIFYKEY;
  const source = tinify.fromFile(inPath);
  // >>>>>>.
  source.toFile(`${Date.now()}.png`);
  console.log(1111);
};

compressByTinify('./static/test.png', '');

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

export default (inPath: string, outPath: string, cmd: CMD) => {
  const pathType = isPathType(inPath);
  const keys = Object.keys(cmd);
  const type = ['nodeimages', 'tinypng'].includes(keys[0]) ? keys[0] : 'tinypng';
  if (pathType === PathTypeEnum.FILE) {
    if (!Regs.img.val.test(inPath)) {
      consoleErr(lang.imgFileIputErr as string);
      return;
    }

  }

  if (pathType === PathTypeEnum.DIRECTORY) {
    
  }

  consoleErr(lang.imgInputPathErr as string);

};