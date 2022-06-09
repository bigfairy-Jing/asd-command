const fs = require('fs');
const chalk = require('chalk')
const inquirer = require('inquirer');
const package = require('./package.json');

const getSuccesText = (lan) => {
  const {name, version} = package;
  return lan === 'cn'? 
    `恭喜您！${name} V${version} 下载成功!`
    :
    `congratulations! ${name} V${version} download successfully!`;
}

const writePackageLanguage = (language) => {
  package.language = language
  const str = JSON.stringify(package)
  try {
    fs.writeFileSync('./dist/package.json', str)
    console.log(
      chalk.white.bgGreen.bold(getSuccesText(language))
    );
  } catch (error) {
    console.log(error)
  }
  
}

const asdSelect = async () => {
  const questions = [
    {
      name: "language",
      type: "list",
      message:
        "您需要选择的语言是?(Please select the language you need?)",
      choices: ["简体中文(Chinese)", "英文(English)"],
      filter(val) {
        return val === "英文(English)" ? "en" : "cn";
      },
    },
  ]
  const { language } = await inquirer.prompt(questions);

  writePackageLanguage(language);
}

asdSelect();