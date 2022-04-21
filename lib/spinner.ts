import ora, { Ora } from "ora";
import chalk from "chalk";

const spinner: Ora = ora();

export default class Spinner {
  static isPaused: boolean = false; // 是否暂停
  static prevMsg: null | {
    symbol: string;
    text: string;
  } = null; // 上一个msg

  static log(text: string, symbol?: string) {
    const { prevMsg } = this;
    symbol = symbol || chalk.green("√");
    // 如果存在上一个，那么停止微调器
    if (prevMsg) {
      spinner.stopAndPersist({
        symbol: prevMsg.symbol,
        text: prevMsg.text,
      });
    }

    spinner.text = ` ${text}`;

    this.prevMsg = {
      symbol: `${symbol}`,
      text,
    };

    spinner.start();
  }

  static stop(text?: string) {
    const { prevMsg } = this;
    if (prevMsg && text) {
      spinner.stopAndPersist({
        symbol: prevMsg.symbol,
        text: text || prevMsg.text,
      });
    } else {
      spinner.stop();
    }
    this.prevMsg = null;
  }

  static restart() {
    if (this.isPaused) {
      spinner.start();
      this.isPaused = false;
    }
  }

  static paused() {
    if (spinner.isSpinning) {
      spinner.stop();
      this.isPaused = true;
    }
  }

  static fail(text: string) {
    spinner.fail(text);
  }
}
