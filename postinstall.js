const fs = require('fs');
const inquirer = require('inquirer');
const package = require('./package.json');

const writePackageLanguage = (language) => {
  package.Language = language
  const str = SON.stringify(package,"","\t")
  try {
    fs.writeFileSync('package.json', str)
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