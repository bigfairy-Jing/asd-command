import inquirer from 'inquirer';
import packageJson from '../../package.json';
import fs from 'fs';
import { CMD } from '../../lib/commonType';
import lang, { langList, langData, LangType } from '../../lang';
import { consoleErr, consoleSuccess } from '../../lib/utils';
import path from 'path';

const _packgeJson = JSON.parse(JSON.stringify(packageJson));

type QuestionItem = {
  name: string;
  type: string;
  message: string;
  choices?: string[];
  filter: (arg0: string) => string;
};

const writePackageLanguage = (language: LangType) => {
  _packgeJson.language = language;
  const str = JSON.stringify(_packgeJson);
  try {
    const packagePath: string = path.resolve(__dirname, '../../package.json');
    fs.writeFileSync(packagePath, str);
    consoleSuccess(langData[language].languageChangeSuccess);
    consoleSuccess(langData[language].showSelectLanguage);
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
  writePackageLanguage(language as LangType);
};

const showLangList = () => {
  consoleSuccess(`\n${langList.map(x => x.name).join(`\n`)}`);
};

export default (cmd: CMD) => {
  const keys = Object.keys(cmd);

  const { length } = keys;

  if (length === 0) {
    consoleSuccess(lang.showSelectLanguage);
    return;
  }

  if (length !== 1) {
    consoleErr(lang.optionError);
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
