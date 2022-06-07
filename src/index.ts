#!/usr/bin/env node
import { Command } from 'commander';
import lang from '../lang/index';
import { validNodeVersion, verifyArgs } from '../lib/utils';
import { CMD } from '../lib/commonType';
import { version, name as cliName } from '../package.json';

// tool
import translate from './translate';
import weather, { weatherOpt } from './weather';
import randomSelect from './randomSelect';
import search, { CMD as SearchCMD } from './search';
import openBrowser from './openBrowser';
import creaetSome from './createSome';
import colorTranslate from './colorTranslate';
import imgTranslate from './imgTranslate';
import createQrcode from './createQrcode';
import imgLinkSave from './imgLinkSave';
import imgCompress from './imgCompress';

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
    verifyArgs('fy');
    translate(val);
  });

program
  .command('translate <word>')
  .description(lang.translate as string)
  .action((val: string) => {
    verifyArgs('translate');
    translate(val);
  });

// $2 天气
program
  .command('tq [text]')
  .description(lang.weather as string)
  .option('-b --base', 'current weather')
  .option('-a --all', 'Weather Forecast')
  .option('-fc --findcode', 'find address code')
  .action((text: string, opt: weatherOpt) => {
    verifyArgs('tq');
    weather(text, opt);
  });

program
  .command('weather [text]')
  .description(lang.weather as string)
  .option('-b --base', 'current weather')
  .option('-a --all', 'Weather Forecast')
  .option('-fc --findcode', 'find address code')
  .action((text: string, opt: weatherOpt) => {
    verifyArgs('weather');
    weather(text, opt);
  });

// $3 随机选择
program
  .command('select <word>')
  .description(lang.selectRandom as string)
  .action((val: string) => {
    verifyArgs('select');
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
  .action((val: string, cmd: SearchCMD) => {
    verifyArgs('search');
    search(val, cmd);
  });

// $5 打开浏览器
program
  .command('open <link>')
  .description(lang.openBrowser as string)
  .action((link: string) => {
    verifyArgs('open');
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
  .action((val: string, cmd: CMD) => {
    verifyArgs('cs');
    creaetSome(val, cmd);
  });

// $6 颜色转换
program
  .command('cc <color>')
  .description(lang.colorTranslate as string)
  .action((color: string) => {
    verifyArgs('cc');
    colorTranslate(color);
  });

// $7 图片转换 -> base64  base64 -> 图片  url -> base64
program
  .command('imgtl <imgStr>')
  .option('-ib, --imgtobase64', 'img to base64')
  .description(lang.imgTranslate as string)
  .action((val: string, cmd: CMD) => {
    verifyArgs('imgtl');
    imgTranslate(val, cmd);
  });

// $8 url 图片地址保存
program
  .command('imgsave <imgLink>')
  .description(lang.imageSaveSuccess as string)
  .action((val: string) => {
    verifyArgs('imgsave');
    imgLinkSave(val);
  });

// $9 图片压缩
program
  .command('imgcp <inPath> <outPath>')
  .option('-tin, --tinypng', 'compress by tinypng')
  .option('-images, --nodeimages', 'compress by npm node-images')
  .description(lang.imgCompress as string)
  .action((pathStr: string, outPath: string,  cmd) => {
    verifyArgs('imgcp', 2);
    imgCompress(pathStr: string, outPath: string,  cmd);
  });

// $10 链接转为二维码
program
  .command('qrcode <link>')
  .description(lang.linkToqrCodeTo as string)
  .action((link: string) => {
    verifyArgs('qrcode');
    createQrcode(link);
  });

program.parse(process.argv);
