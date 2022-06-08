#!/usr/bin/env node
import { validNodeVersion, verifyArgs } from '../lib/utils';
// @ 1检测NODE版本是否合格
if (!validNodeVersion()) {
  process.exit(1);
}
import { Command } from 'commander';
import lang from '../lang/index';
import { CMD } from '../lib/commonType';
import { version, name as cliName } from '../package.json';

// @3 命令行书写
const program = new Command();
program.version(`${cliName} ${version}`).usage('<command> [options]');

program.option('-V --version', `${cliName} ${version}`);

// $1 翻译
program
  .command('fy <word>')
  .description(lang.translate)
  .action(async (val: string) => {
    verifyArgs('fy');
    const translate = await import('./translate');
    translate.default(val);
  });

program
  .command('translate <word>')
  .description(lang.translate)
  .action(async (val: string) => {
    verifyArgs('fy');
    const translate = await import('./translate');
    translate.default(val);
  });

// $2 天气
program
  .command('tq [text]')
  .description(lang.weather)
  .option('-b --base', 'current weather')
  .option('-a --all', 'Weather Forecast')
  .option('-fc --findcode', 'find address code')
  .action(async (text: string, opt: CMD) => {
    verifyArgs('tq');
    const weather = await import('./weather');
    weather.default(text, opt);
  });

program
  .command('weather [text]')
  .description(lang.weather)
  .option('-b --base', 'current weather')
  .option('-a --all', 'Weather Forecast')
  .option('-fc --findcode', 'find address code')
  .action(async (text: string, opt: CMD) => {
    verifyArgs('tq');
    const weather = await import('./weather');
    weather.default(text, opt);
  });

// $3 随机选择
program
  .command('select <word>')
  .description(lang.selectRandom)
  .action(async (val: string) => {
    verifyArgs('select');
    const randomSelect = await import('./randomSelect');
    randomSelect.default(val);
  });

// $4 搜索跳转
program
  .command('search <word>')
  .option('-n, --npm', 'search by npm')
  .option('-b, --baidu', 'search by baidu')
  .option('-t, --github', 'search by github')
  .option('-g, --google', 'search by google')
  .option('-a, --all', 'search by all set')
  .description(lang.searchDesc)
  .action(async (val: string, cmd: CMD) => {
    verifyArgs('search');
    const search = await import('./search');
    search.default(val, cmd);
  });

// $5 打开url
program
  .command('open <link>')
  .description(lang.openBrowser)
  .action(async (link: string) => {
    verifyArgs('open');
    const openBrowser = await import('./openBrowser');
    openBrowser.default(link);
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
  .description(lang.createAny)
  .action(async (val: string, cmd: CMD) => {
    verifyArgs('cs');
    const creaetSome = await import('./createSome');
    creaetSome.default(val, cmd);
  });

// $7 颜色转换
program
  .command('cc <color>')
  .description(lang.colorTranslate)
  .action(async (color: string) => {
    verifyArgs('cc');
    const colorTranslate = await import('./colorTranslate');
    colorTranslate.default(color);
  });

// $8 图片转换 -> base64  base64 -> 图片  url -> base64
program
  .command('imgtl <imgStr>')
  .option('-ib, --imgtobase64', 'img to base64')
  .option('-ub, --urltobase64', 'img link to base64')
  .description(lang.imgTranslate)
  .action(async (val: string, cmd: CMD) => {
    verifyArgs('imgtl');
    const imgTranslate = await import('./imgTranslate');
    imgTranslate.default(val, cmd);
  });

// $9 url 图片地址保存
program
  .command('imgsave <imgLink>')
  .description(lang.imageSaveSuccess)
  .action(async (val: string) => {
    verifyArgs('imgsave');
    const imgLinkSave = await import('./imgLinkSave');
    imgLinkSave.default(val);
  });

// $10 图片压缩
program
  .command('imgcp <inPath> <outPath>')
  .option('-tin, --tinypng', 'compress by tinypng')
  .option('-images, --nodeimages', 'compress by npm node-images')
  .description(lang.imgCompress)
  .action(async (pathStr: string, outPath: string, cmd: CMD) => {
    verifyArgs('imgcp', 2);
    const imgCompress = await import('./imgCompress');
    imgCompress.default(pathStr, outPath, cmd);
  });

// $11 获取图片信息 单个文件 文件夹
program
  .command('imginfo <imgPath>')
  .option('-b, --base', 'Get file picture information')
  .option('-l, --link', 'Get linked picture information')
  .description(lang.showImgInfo)
  .action(async (imgPath: string, cmd: CMD) => {
    verifyArgs('imginfo');
    const imgInfo = await import('./imgInfo');
    imgInfo.default(imgPath, cmd);
  });

// $12 链接转为二维码
program
  .command('qrcode <link>')
  .description(lang.linkToqrCodeTo)
  .action(async (link: string) => {
    verifyArgs('qrcode');
    const createQrcode = await import('./createQrcode');
    createQrcode.default(link);
  });

// $13 货币转换
program
  .command('money [translateStr]')
  .description(lang.moneyTranslate)
  .option('-sct, --selectcountry', 'The currency is converted by selecting the country')
  .option('-scr, --selectcurrency', 'Currency is converted by selecting a currency')
  .option('-showcode, --showcode', 'Show all currency codes')
  .option('-showcodecurrency, --showcurrency', 'Show all currency codes')
  .option('-b, --bycode', 'Currency is converted by code')
  .action(async (translateStr: string, cmd: CMD) => {
    verifyArgs('money');
    const moneyTranslate = await import('./moneyTranslate');
    moneyTranslate.default(translateStr, cmd);
  });

// $14 终极复制
program
  .command('copy <word> <opt>')
  .description(lang.copy)
  .option('-bn, --bynumber', 'copy by number')
  .option('-be, --byexpre', 'copy by expression')
  .action(async (word: string, opt: string, cmd: CMD) => {
    verifyArgs('copy', 2);
    const copyUltimate = await import('./copyUltimate');
    copyUltimate.default(word, opt, cmd);
  });

// $15 选择中英文
program
  .command('lang')
  .description(lang.languageChange)
  .option('-ls, --ls', 'show language list')
  .option('-select, --select', 'Choose the language you currently need')
  .action(async (cmd: CMD) => {
    const languageChange = await import('./languageChange');
    languageChange.default(cmd);
  });

program.parse(process.argv);
