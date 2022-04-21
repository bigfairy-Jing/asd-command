// 这个文件做用户选择储存的东西

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { langData } from "../lang";
import fs from "fs";
import os from "os";
import { exit } from "process";
import path from "path";

type QuestionItem = {
  name: string;
  type: string;
  message: string;
  choices?: string[];
  filter: (arg0: string) => string;
};

type WriteItem = {
  name: string;
  value: string;
};

export class Select {
  constructor() {
    this.init();
    this.start();
  }

  private init() {
    console.log(
      chalk.green(
        figlet.textSync("asd", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default",
        })
      )
    );
  }

  private async start() {
    const { Language } = await this.askSelect();
    this.write([{ name: "lanuage", value: Language }]);
    this.success(Language);
  }

  private askSelect(): Promise<{ Language: "en" | "cn" }> {
    const questions: QuestionItem[] = [
      {
        name: "Language",
        type: "list",
        message:
          "您需要选择的语言是?(please choose the language that you need)",
        choices: ["简体中文(Chinese)", "英文(English)"],
        filter(val) {
          return val === "英文(English)" ? "en" : "cn";
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  private write(writeArr: WriteItem[]) {
    const writeStr = writeArr.reduce(
      (prev, cur) =>
        `${prev}${os.EOL}export const ${cur.name} = "${cur.value}";`,
      ""
    );
    fs.writeFileSync(
      path.resolve(`${__dirname}`, `../static/data.js`),
      writeStr
    );
  }

  success(Language: "en" | "cn") {
    console.log(Language);
    console.log(
      chalk.white.bgGreen.bold(`${langData[Language].successDL as string}`)
    );
    exit();
  }
}
