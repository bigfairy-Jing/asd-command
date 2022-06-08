import GotFetch from '../../lib/fetch';
import chalk from 'chalk';
import isChinese from 'is-chinese';
import urlencode from 'urlencode';
// 清除英文字符的特殊字符 返回以空格相隔的
import { noCase } from 'no-case';
import spinner from '../../lib/spinner';
import lang from '../../lang';
import getTranslateUrl from './config';
import parser from './parser';
import { splitTrim } from '../../lib/utils';

export default async (text: string) => {
  // 如果有一个为中文那么就用中文翻译成英文API
  const useChinese: boolean = splitTrim(text).some(txt => isChinese(txt));

  const word = useChinese ? text : noCase(text);

  spinner.log(lang.translating);

  const { code, res, error } = await GotFetch.get(
    `${getTranslateUrl(useChinese)}${urlencode(word)}`
  );
  if (code !== 0) {
    spinner.stop(lang.translateError);
    console.log(`${chalk.red(error)}`);
    return;
  }

  spinner.stop('翻译完成');
  // @ts-ignore
  console.log(parser(useChinese, res.body));
};
