#!/usr/bin/env node
import { Command } from 'commander';
import lang from '../lang/index';
import { validNodeVersion } from '../lib/utils';
import { version, name as cliName } from '../package.json';

// tool
import translate from './translate';
import weather, { weatherOpt } from './weather';
import randomSelect from './randomSelect';
import search, { CMD } from './search';
import openBrowser from './openBrowser';
import creaetSome from './createSome';
import colorTranslate from './colorTranslate';
import imgTranslate from './imgTranslate';
import createQrcode from './createQrcode';

// @ 1检测NODE版本是否合格
if (!validNodeVersion()) {
  process.exit(1);
}

// @2 下载时候的选项（中英文）
// new Select();

// @3 命令行书写
const program = new Command();
program.version(`${cliName} ${version}`).usage('<command> [options]');

program.option('-V --version', `${cliName} ${version}`);

// $1 翻译
program
  .command('fy <word>')
  .description(lang.translate as string)
  .action((val: string) => {
    translate(val);
  });

// $2 天气
program
  .command('tq [text]')
  .option('-b --base', 'current weather')
  .option('-a --all', 'Weather Forecast')
  .option('-fc --findcode', 'find address code')
  .action((text: string, opt: weatherOpt) => {
    weather(text, opt);
  });

// $3 随机选择
program
  .command('select <word>')
  .description(lang.selectRandom as string)
  .action((val: string) => {
    randomSelect(val);
  });

// $4 搜索跳转
program
  .command('search <word>')
  .option('-n, --npm', 'search by npm')
  .option('-b, --baidu', 'search by baidu')
  .option('-t, --github', 'search by github')
  .option('-g, --google', 'search by google')
  .option('-a, --all', 'search by all set')
  .description(lang.searchDesc as string)
  .action((val: string, cmd: CMD) => {
    search(val, cmd);
  });

// $5 打开浏览器
program
  .command('open <link>')
  .description(lang.openBrowser as string)
  .action((link: string) => {
    openBrowser(link);
  });

// $6 生成数字 随机数 唯一ID 时间戳 指定长度随机字母 随机手机号 随机姓名 随机身份证 随机颜色
program
  .command('cs [optStr]')
  .option('-r, --random', 'num of random')
  .option('-id, --uniqueid', 'num of unique id')
  .option('-tt, --timestamp', 'num of timestamp')
  .option('-rl, --randomletter', 'random letter')
  .option('-rp, --randomphone', 'random phone number')
  .option('-rh, --randomhue', 'random colour')
  .description(lang.createAny as string)
  .action((val: string, cmd) => {
    creaetSome(val, cmd);
  });

// $6 颜色转换
program
  .command('cc <color>')
  .description(lang.colorTranslate as string)
  .action((color: string) => {
    colorTranslate(color);
  });

// $7 图片转换 -> base64  base64 -> 图片  url -> base64
program
  .command('imgtl [optStr]')
  .option('-ib, --imgtobase64', 'img to base64')
  // .option('-bi, --base64toimg', 'base64 to img')
  .option('-us, --urlsave', 'url save')
  .description(lang.imgTranslate as string)
  .action((val: string, cmd) => {
    // imgTranslate(val, cmd);
  });

// $8 图片压缩
program
  .command('imgcp [optStr]')
  .option('-tin, --tinypng', 'compress by tinypng')
  .option('-images, --nodeimages', 'compress by npm node-images')
  .description(lang.imgCompress as string)
  .action((val: string, cmd) => {
    // imgCompress();
  });

// $9 链接转为二维码
program
  .command('qrcode <link>')
  .description(lang.linkToqrCodeTo as string)
  .action((link: string) => {
    createQrcode(link);
  });

program.parse(process.argv);
