import ora, { Ora } from 'ora';
import chalk from 'chalk';

const spinner: Ora = ora();

export default class Spinner {
  static log(text: string) {
    spinner.text = chalk.blue(text);
    spinner.start();
  }

  static success(msg: string) {
    spinner.stopAndPersist({
      symbol: chalk.green('✔'),
      text: chalk.green(msg),
    });
  }

  static stop() {
    spinner.stop();
  }

  static fail(text: string) {
    spinner.fail(text);
  }
}
