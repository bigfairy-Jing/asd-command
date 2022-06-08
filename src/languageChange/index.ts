import inquirer from 'inquirer';
import packageJson from '../../package.json';
import fs from 'fs';
import { CMD } from '../../lib/commonType';
import lang, { langList, languageType } from '../../lang';
import { consoleSuccess } from '../../lib/utils';

const _packgeJson = JSON.parse(JSON.stringify(packageJson));
const language: string = _packgeJson?.language || 'cn';

type QuestionItem = {
  name: string;
  type: string;
  message: string;
  choices?: string[];
  filter: (arg0: string) => string;
};

const writePackageLanguage = (language: string) => {
  _packgeJson.language = language;
  const str = JSON.stringify(_packgeJson);
  try {
    fs.writeFileSync('./dist/package.json', str);
    console.log();
  } catch (error) {
    console.log(error);
  }
};

const selectLang = async () => {
  const questions: QuestionItem[] = [
    {
      name: 'language',
      type: 'list',
      message: '您需要选择的语言是?(please choose the language that you need)',
      choices: ['简体中文(Chinese)', '英文(English)'],
      filter(val) {
        return val === '英文(English)' ? 'en' : 'cn';
      },
    },
  ];
  const { language } = await inquirer.prompt(questions);
  writePackageLanguage(language as string);
};

const showLangList = () => {
  consoleSuccess(langList.map(x => x.name).join(`\n`));
};

export default (cmd: CMD) => {
  const keys = Object.keys(cmd);

  const { length } = keys;

  if (length === 0) {
    console.log(languageType, '_______>');
    // @ts-ignore
    consoleSuccess(lang.getSelectLanguage(language) as string);
    return;
  }

  if (length !== 1) {
    console.error(lang.optionError);
    return;
  }

  const type = keys[0];

  switch (type) {
    case 'ls':
      showLangList();
      break;
    case 'select':
      selectLang();
      break;
  }
};